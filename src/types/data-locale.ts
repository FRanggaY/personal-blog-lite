interface Navbar {
  title: {
    article: string,
  },
  personal: {
    title: string
  }
}

interface Landing {
  title: {
    latest: string
  },
}

interface Article {
  title: {
    article: string,
    filter_by_category: string,
  },
}

export interface DataLocale {
  [key: string]: {
    navbar: Navbar,
    landing: Landing,
    article: Article,
  };
}
