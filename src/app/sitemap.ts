import { MetadataRoute } from 'next'
import { blogs } from '@/src/data/blogs'
import { portfolio } from '@/src/data/portfolio'
import { othercategories } from '@/src/data/othercategories'
import { projects } from '@/src/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hexarstudios.com'
  const now = new Date()

  const staticRoutes = [
    '',
    '/home',
    '/about-us',
    '/services',
    '/portfolio',
    '/blogs',
    '/html-sitemap',
    '/contact-us',
    '/join-us',
    '/privacy-policy',
    '/terms-and-conditions',
  ]

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const toSafeDate = (value: string) => {
    const parsedDate = new Date(value)
    return Number.isNaN(parsedDate.getTime()) ? now : parsedDate
  }

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: toSafeDate(blog.date),
    priority: 0.8,
  }))

  const categoryUrls = portfolio.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: now,
    priority: 0.8,
  }))

  const categoryAlbumUrls = portfolio.flatMap((category) =>
    (category.albums || []).map((album) => ({
      url: `${baseUrl}/categories/${category.slug}/albums/${album.slug}`,
      lastModified: now,
      priority: 0.7,
    }))
  )

  const showreelUrls = othercategories.map((showreel) => ({
    url: `${baseUrl}/showreels/${showreel.slug}`,
    lastModified: now,
    priority: 0.8,
  }))

  const showreelAlbumUrls = othercategories.flatMap((showreel) =>
    (showreel.albums || []).map((album) => ({
      url: `${baseUrl}/showreels/${showreel.slug}/albums/${album.slug}`,
      lastModified: now,
      priority: 0.7,
    }))
  )

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: now,
    priority: 0.8,
  }))

  const projectAlbumUrls = projects.flatMap((project) =>
    (project.albums || []).map((album) => ({
      url: `${baseUrl}/projects/${project.slug}/albums/${album.slug}`,
      lastModified: now,
      priority: 0.7,
    }))
  )

  const allUrls = [
    ...staticUrls,
    ...blogUrls,
    ...categoryUrls,
    ...categoryAlbumUrls,
    ...showreelUrls,
    ...showreelAlbumUrls,
    ...projectUrls,
    ...projectAlbumUrls,
  ]

  return Array.from(
    new Map(allUrls.map((entry) => [entry.url, entry])).values()
  )
}
