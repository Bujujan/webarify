import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const locales = ['en', 'fr'] as const

type ChangeFreq = 'yearly' | 'monthly' | 'weekly' | 'always' | 'hourly' | 'daily' | 'never'

const pages: {
  path: string
  changeFrequency: ChangeFreq
  priority: number
}[] = [
  { path: '', changeFrequency: 'yearly', priority: 1 },
  { path: 'about-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'our-services', changeFrequency: 'weekly', priority: 0.7 },
  { path: 'our-services/web-development', changeFrequency: 'monthly', priority: 0.6 },
  { path: 'our-services/branding', changeFrequency: 'monthly', priority: 0.6 },
  { path: 'our-services/ai-chatbots', changeFrequency: 'monthly', priority: 0.6 },
  // { path: 'contact', changeFrequency: 'monthly', priority: 0.6 },
  // { path: 'portfolio', changeFrequency: 'monthly', priority: 0.6 },
  // { path: 'blog', changeFrequency: 'weekly', priority: 0.7 },
  // { path: 'faqs', changeFrequency: 'monthly', priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page.path ? '/' + page.path : ''}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  )
}
