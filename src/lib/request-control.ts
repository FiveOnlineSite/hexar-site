const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

const AGGRESSIVE_BOT_PATTERNS = [
  /ahrefsbot/i,
  /semrushbot/i,
  /mj12bot/i,
  /dotbot/i,
  /rogerbot/i,
]

const VERIFIED_BOT_PATTERNS = [/googlebot/i, /bingbot/i, /applebot/i]

export type BotCategory = 'aggressive' | 'verified' | 'unknown'

type RateLimitResponse = {
  success: boolean
  limit: number
  remaining: number
  reset: number
  disabled: boolean
  botCategory: BotCategory
}

function getRule(botCategory: BotCategory) {
  if (botCategory === 'aggressive') {
    return { limit: 5, windowSeconds: 60, prefix: 'rl:aggressive-bot' }
  }

  if (botCategory === 'verified') {
    return { limit: 20, windowSeconds: 60, prefix: 'rl:verified-bot' }
  }

  return { limit: 50, windowSeconds: 60, prefix: 'rl:default' }
}

export function getClientIp(headers: Headers): string {
  const xff = headers.get('x-forwarded-for')
  if (xff) {
    return xff.split(',')[0]?.trim() ?? 'unknown'
  }

  return headers.get('x-real-ip') ?? 'unknown'
}

export function classifyBot(userAgent: string): BotCategory {
  if (AGGRESSIVE_BOT_PATTERNS.some((pattern) => pattern.test(userAgent))) {
    return 'aggressive'
  }

  if (VERIFIED_BOT_PATTERNS.some((pattern) => pattern.test(userAgent))) {
    return 'verified'
  }

  return 'unknown'
}

async function upstashPipeline(commands: unknown[][]) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return null
  }

  const response = await fetch(`${UPSTASH_URL}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`UPSTASH_PIPELINE_${response.status}`)
  }

  return response.json() as Promise<Array<{ result: number | null }>>
}

export async function checkRateLimit({
  ip,
  userAgent,
}: {
  ip: string
  userAgent: string
}): Promise<RateLimitResponse> {
  const botCategory = classifyBot(userAgent)

  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return {
      success: true,
      limit: 0,
      remaining: 0,
      reset: 0,
      disabled: true,
      botCategory,
    }
  }

  const { limit, windowSeconds, prefix } = getRule(botCategory)
  const key = `${prefix}:${ip}`

  const [incr, ttl] =
    (await upstashPipeline([
      ['INCR', key],
      ['TTL', key],
      ['EXPIRE', key, windowSeconds, 'NX'],
    ])) ?? []

  const hits = Number(incr?.result ?? 0)
  const ttlSeconds = Number(ttl?.result ?? windowSeconds)
  const remaining = Math.max(limit - hits, 0)

  return {
    success: hits <= limit,
    limit,
    remaining,
    reset: Date.now() + Math.max(ttlSeconds, 0) * 1000,
    disabled: false,
    botCategory,
  }
}
