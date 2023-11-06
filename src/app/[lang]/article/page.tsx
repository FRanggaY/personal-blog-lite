import { getDictionary } from "@/utils/dictionary";
import siteMetadata from "@/utils/siteMetaData";

import dataCategories from '@/data/categories.json'
import Category from '@/components/Elements/Category';
import NotFound from "@/app/not-found";
import BaseArticle from "@/components/Article/BaseArticle";
import { HomePageProps } from "@/types";


export async function generateMetadata({ params: { lang } }: HomePageProps) {
  const dict: any = await getDictionary(lang as 'en' | 'id');
  if (!dict) {
    return;
  }
  return {
    title: 'Article',
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: siteMetadata.siteUrl,
      siteName: siteMetadata.title,
      images: [siteMetadata.socialBanner],
      locale: lang,
      type: "website",
    },
  };
}

export default async function Home({ params: { lang } }:HomePageProps) {
  const dict: any = await getDictionary(lang as 'en' | 'id');
  if (!dict) {
    return <NotFound />;
  }
  return (
    <main className="flex flex-col items-center justify-center">
      <Category lang={lang} categories={dataCategories} />
      <BaseArticle lang={lang} />
    </main>
  );
}
