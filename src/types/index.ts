import { MouseEventHandler } from "react";

export interface SwitcherProps {
  storageKey: string;
  defaultValue: string;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface BaseArticleProps {
  lang: string;
}

export interface ArticleLayoutProps {
  lang: string;
  article: {
    slug: string;
    imageUrl?: string;
    title: string;
    categories: { id: string; label: string }[];
    publishedAt: string,
  }
}

export interface ArticleDetailProps {
  lang: string;
  article: {
    slug: string;
    imageUrl?: string;
    title: string;
    categories: { id: string; label: string }[];
    author: string,
    publishedAt: string,
    updatedAt: string,
    headline: string,
  }
}

export interface HomePageProps {
  params: {
    lang: string;
  }
}

export interface ArticleDetailPageProps {
  params: {
    lang: string;
    slug: string;
  }
}
