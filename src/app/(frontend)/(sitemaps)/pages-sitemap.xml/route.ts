import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

export const dynamic = 'force-dynamic'

const getPagesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.BASE_DOAMAIN ||
      'https://mea-nova.vercel.app'

    const results = await payload.find({
      collection: 'pages',
      overrideAccess: true, // or false if you set access.read = () => true on the collection
      depth: 0,
      limit: 1000,
      pagination: false,
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap = results.docs
      ? results.docs
        .filter((page: { slug?: string | null; updatedAt?: string }) => Boolean(page?.slug))
        .map((page: { slug?: string | null; updatedAt?: string }) => ({
          loc: page?.slug === 'home' ? `${SITE_URL}/` : `${SITE_URL}/${page?.slug}`,
          lastmod: page.updatedAt || dateFallback,
        }))
      : []

    return [...sitemap]
  },
  ['pages-sitemap'],
  {
    tags: ['pages-sitemap'],
  },
)

export async function GET() {
  try {
    const sitemap = await getPagesSitemap()
    return getServerSideSitemap(sitemap)
  } catch (error) {
    console.error('pages-sitemap error:', error)
    const SITE_URL = process.env.BASE_DOAMAIN || 'https://mea-nova.vercel.app'
    return getServerSideSitemap([
      { loc: `${SITE_URL}/`, lastmod: new Date().toISOString() },
    ])
  }
}
