'use client'; // This makes the component a client component

import React from 'react';
import Link from 'next/link';
import { ArticleType } from '@/components/Article/ArticlesList'; // Import ArticleType if it's in ArticlesList

interface ArticleListLatestProps {
  articles: ArticleType[];
}

const ArticleListLatest: React.FC<ArticleListLatestProps> = ({ articles }) => {
  // Sort articles by updated_at and take the latest 4
  const latestArticles = [...articles]
    .sort((a, b) => {
      const dateA = a.updated_at ? new Date(a.updated_at).getTime() : -Infinity;
      const dateB = b.updated_at ? new Date(b.updated_at).getTime() : -Infinity;
      return dateB - dateA; // Descending order
    })
    .slice(0, 4);

  if (latestArticles.length === 0) return <p>No articles available.</p>;

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 md:mb-16">
        Latest Article
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Full content for the first article */}
        <Link href={`/articles/${latestArticles[0].slug}`}>
          <div className="flex-1 mb-4 h-full md:mb-0 border p-5">
            <h2 className="text-2xl font-bold">
              {latestArticles[0].title}
            </h2>
            <p>{latestArticles[0].description}</p>
            <br />
            <p>{latestArticles[0].updated_at}</p>
          </div>
        </Link>

        {/* Flex layout for the other articles */}
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {latestArticles.slice(1).map(article => (
            <Link href={`/articles/${article.slug}`} key={article.slug}>
              <div className="flex-1 mb-4 border p-5 mx-2">
                <h3 className="text-lg font-semibold">
                  {article.title}
                </h3>
                <p>{article.description}</p>
                <br />
                <p>{article.updated_at}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleListLatest;
