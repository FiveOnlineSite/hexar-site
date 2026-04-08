import Link from 'next/link'
import { blogs } from '@/src/data/blogs'
import { portfolio } from '@/src/data/portfolio'
import { othercategories } from '@/src/data/othercategories'
import { projects } from '@/src/data/projects'

const staticRoutes = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Join Us', href: '/join-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
]

export default function HtmlSitemapPage() {
  return (
    <section className="3xl:mx-20 2xl:mx-18 xl:mx-16 mx-0 lg:p-16 md:p-16 p-8">
      <h1 className="text-[34px] font-bold leading-base uppercase">HTML Sitemap</h1>

      <div className="mt-8 space-y-8">
        <div>
          <h2 className="text-[24px] font-semibold">Main Pages</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            {staticRoutes.map((route) => (
              <li key={route.href}>
                <Link href={route.href} className="hover:underline">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[24px] font-semibold">Blog Pages</h2>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link href={`/blogs/${blog.slug}`} className="hover:underline">
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[24px] font-semibold">Categories</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            {portfolio.map((category) => (
              <li key={category.slug}>
                <Link href={`/categories/${category.slug}`} className="hover:underline font-medium">
                  {category.title}
                </Link>
                {category.albums && category.albums.length > 0 && (
                  <ul className="mt-1 list-[circle] pl-6 space-y-1">
                    {category.albums.map((album) => (
                      <li key={`${category.slug}-${album.slug}`}>
                        <Link
                          href={`/categories/${category.slug}/albums/${album.slug}`}
                          className="hover:underline"
                        >
                          {album.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[24px] font-semibold">Showreels</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            {othercategories.map((showreel) => (
              <li key={showreel.slug}>
                <Link href={`/showreels/${showreel.slug}`} className="hover:underline font-medium">
                  {showreel.title}
                </Link>
                {showreel.albums && showreel.albums.length > 0 && (
                  <ul className="mt-1 list-[circle] pl-6 space-y-1">
                    {showreel.albums.map((album) => (
                      <li key={`${showreel.slug}-${album.slug}`}>
                        <Link
                          href={`/showreels/${showreel.slug}/albums/${album.slug}`}
                          className="hover:underline"
                        >
                          {album.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[24px] font-semibold">Projects</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="hover:underline font-medium">
                  {project.title}
                </Link>
                {project.albums && project.albums.length > 0 && (
                  <ul className="mt-1 list-[circle] pl-6 space-y-1">
                    {project.albums.map((album) => (
                      <li key={`${project.slug}-${album.slug}`}>
                        <Link
                          href={`/projects/${project.slug}/albums/${album.slug}`}
                          className="hover:underline"
                        >
                          {album.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
