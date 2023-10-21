import { getDictionary } from "@/utils/dictionary";
import siteMetadata from "@/utils/siteMetaData";
import NotFound from "@/app/not-found";
import { selectArticleData } from "@/utils/articleManagement";
import ArticleDetailCoverSection from "@/components/Article/ArticleDetailCoverSection";
import { ArticleDetailPageProps } from "@/types";

export async function generateMetadata({ params: { lang, slug } }:ArticleDetailPageProps) {
  const dict:any = await getDictionary(lang as 'en' | 'id');

  const selectedArticleData = selectArticleData(slug, lang);
  if (!selectedArticleData || !dict) {
    return;
  }

  const publishedAt = new Date(selectedArticleData.publishedAt).toISOString();
  const modifiedAt = new Date(selectedArticleData.updatedAt || selectedArticleData.publishedAt).toISOString();

  let imageList:any = [siteMetadata.socialBanner];
  if (selectedArticleData.imageUrl) {
    imageList =
      typeof selectedArticleData.imageUrl === "string"
        ? [siteMetadata.siteUrl + selectedArticleData.imageUrl.replace("../public", "")]
        : selectedArticleData.imageUrl;
  }
  const ogImages = imageList.map((img:any) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = selectedArticleData?.author ? [selectedArticleData.author] : siteMetadata.author;

  return {
    title: selectedArticleData.title,
    description: selectedArticleData.headline,
    openGraph: {
      title: selectedArticleData.title,
      description: selectedArticleData.headline,
      url: `${siteMetadata.siteUrl}/${lang}/article/${selectedArticleData.slug}`,
      siteName: siteMetadata.title,
      locale: lang,
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors ?? [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: selectedArticleData.title,
      description: selectedArticleData.headline,
      images: ogImages,
    },
  };
}

export default async function Home({ params: { lang, slug } }:ArticleDetailPageProps) {
  const dict:any = await getDictionary(lang as 'en' | 'id');

  const selectedArticleData = selectArticleData(slug, lang);
  if (!selectedArticleData || !dict) {
    return <NotFound />;
  }
  const article = selectedArticleData

  const markup = { __html: article.description };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <ArticleDetailCoverSection lang={lang} article={article} />
      <div dangerouslySetInnerHTML={markup} className="dark:text-white text-black prose lg:prose-xl" />
    </div>
  );
}
