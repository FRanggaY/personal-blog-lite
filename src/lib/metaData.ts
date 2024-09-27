export const description = 'Article - Tutorial | Documentation';
export const siteName = `${process.env.NEXT_PUBLIC_AUTHOR_INITIAL} article - Tutorial | Documentation`;
export const url = process.env.NEXT_PUBLIC_APP_URL;
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
  authors: [{ name: process.env.NEXT_PUBLIC_AUTHOR_INITIAL, url: process.env.NEXT_PUBLIC_AUTHOR_URL }],
  creator: process.env.NEXT_PUBLIC_AUTHOR_INITIAL,
}
