const siteMetadata = {
    title: process.env.TITLE,
    author: process.env.AUTHOR,
    headerTitle: process.env.HEADER_TITLE,
    description: process.env.DESCRIPTION,
    language: process.env.LANGUAGE,
    theme:  process.env.THEME, // system, dark or light
    siteUrl: process.env.SITE_URL, // your website URL
    siteLogo:  process.env.SITE_LOGO,
    socialBanner: process.env.SOCIAL_BANNER, // add social banner in the public folder
    github: process.env.GITHUB,
    twitter: process.env.TWITTER,
    facebook: process.env.FACEBOOK,
    youtube: process.env.YOUTUBE,
    linkedin: process.env.LINKEDIN,
    locale: process.env.LOCALE,
  }

export default siteMetadata;
