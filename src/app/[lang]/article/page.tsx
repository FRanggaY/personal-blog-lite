import { getDictionary } from "@/utils/dictionary";
import siteMetadata from "@/utils/siteMetaData";
import NotFound from "@/app/not-found";
import ArticleCoverSection from "@/components/Article/ArticleCoverSection";


export async function generateMetadata({ params: { lang } }:any) {
  const dict:any = await getDictionary(lang);
  if (!dict) {
    return;
  }
  return {
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

export default async function Home({ params: { lang } }:any) {
  const dict:any = await getDictionary(lang);
  if (!dict) {
    return <NotFound />;
  }

  return (
    <ArticleCoverSection lang={lang} />
  );
}
