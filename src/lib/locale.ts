import { DataLocale } from "@/types/data-locale";

const engData = {
  navbar: {
    title: {
      article: 'Articles',
    },
    personal: {
      title: 'Personal Blog'
    }
  },
  landing: {
    title: {
      latest: "Latest Article",
    },
  },
  article: {
    title: {
      article: 'articles',
      filter_by_category: 'Filter by Category:',
    },
  },
}

const indData = {
  navbar: {
    title: {
      article: 'Artikel',
    },
    personal: {
      title: 'Blog Pribadi'
    }
  },
  landing: {
    title: {
      latest: "Artikel Terbaru",
    },
  },
  article: {
    title: {
      article: 'artikel',
      filter_by_category: 'Saring berdasarkan Kategori:',
    },
  },
}

export const dataLocale: DataLocale = {
  en: engData,
  id: indData
};


export const validLocale = (locale: string) => {
  return locale === 'en' || locale === 'id' ? locale : 'en'
}
