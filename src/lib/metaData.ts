export const description = 'Article - Tutorial | Documentation';
export const siteName = 'FRY article - Tutorial | Documentation';
export const url = 'http://localhost:3000';
export const ogImage = `${url}/images/og.jpg`;

export const metaData = {
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description,
  openGraph: {
    title: 'Article',
    description,
    url,
    type: 'website',
    siteName,
    locale: 'en_US',
    images: [
      {
        url: ogImage,
        width: 2024,
        height: 1012,
        alt: siteName
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    creator: '@fry',
    images: [ogImage],
  },
  authors: [{ name: 'FRY', url: 'https://franciscusrangga.com' }],
  creator: 'FRY',
}
