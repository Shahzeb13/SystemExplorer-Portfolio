import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://shahzeb-portfolio.com' // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example of a disallowed path
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
