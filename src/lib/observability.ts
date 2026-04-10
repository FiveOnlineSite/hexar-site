import { NextResponse } from 'next/server'

const SLOW_REQUEST_MS = 3000

export function logSlowRequest(route: string, startTime: number, metadata?: Record<string, unknown>) {
  const elapsedMs = Date.now() - startTime

  if (elapsedMs >= SLOW_REQUEST_MS) {
    console.warn('[slow-route]', JSON.stringify({ route, elapsedMs, ...metadata }))
  }

  return elapsedMs
}

export function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}
