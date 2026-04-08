import { MetadataRoute } from 'next'
import { blogs } from '@/src/data/blogs'

// 👉 Add your project/category data imports here if available
// import { projects } from '@/src/data/projects'
// import { categories } from '@/src/data/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hexarstudios.com'

  // -----------------------
  // STATIC PAGES
  // -----------------------
  const staticRoutes = [
    '',
    '/about-us',
    '/services',
    '/portfolio',
    '/blogs',
    '/contact-us',
    '/join-us',
    '/privacy-policy',
    '/terms-and-conditions',
  ]

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    priority: route === '' ? 1.0 : 0.8,
  }))

  // -----------------------
  // BLOGS (DYNAMIC)
  // -----------------------
  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    priority: 0.8,
  }))

  // -----------------------
  // PROJECTS (ADD WHEN DATA AVAILABLE)
  // -----------------------
  /*
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }))
  */

  // -----------------------
  // CATEGORIES
  // -----------------------
  const categories = [
    'concept-art',
    'characters',
    'realtime-hair',
    'creature-modeling',
    'props',
    'weapons',
    'hard-surface',
    'vehicles',
    'stylized-art',
  ]

  const categoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat}`,
    lastModified: new Date(),
    priority: 0.8,
  }))

  // -----------------------
  // SHOWREELS
  // -----------------------
  const showreels = [
    'technical-art',
    'animation',
    'cinematics',
    'realtime-vfx',
  ]

  const showreelUrls = showreels.map((sr) => ({
    url: `${baseUrl}/showreels/${sr}`,
    lastModified: new Date(),
    priority: 0.8,
  }))

  // -----------------------
  // FINAL RETURN
  // -----------------------
  return [
    ...staticUrls,
    ...blogUrls,
    ...categoryUrls,
    ...showreelUrls,
    // ...projectUrls (enable later)
  ]
}
