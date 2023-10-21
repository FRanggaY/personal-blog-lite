"use client"
import React from 'react'
import dataArticles from '@/data/articles.json'
import ArticleLayoutRelative from '@/components/Article/ArticleLayoutRelative';
import { BaseArticleProps } from '@/types';
import { useSearchParams } from 'next/navigation'

function BaseArticle({ lang }: BaseArticleProps) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') ?? ''

  const translateDataArticles = dataArticles.filter((article) => {
    if (category) {
      const normalizedCategory = category.toLowerCase();
      return article.categories.some(categoryData => categoryData.label.toLowerCase() === normalizedCategory) && article.lang === lang;
    }
    return article.lang === lang;
  })

  const isDataEmpty = !Array.isArray(translateDataArticles) || translateDataArticles.length < 1 || !translateDataArticles;

  return (
    <div className="p-4">
      {!isDataEmpty ? (
        <section className="flex flex-wrap justify-center">
          {
            translateDataArticles?.map((article) => (
              <ArticleLayoutRelative key={article.slug} article={article} lang={lang} />
            ))
          }
        </section>
      ) : (
        <div className="relative flex flex-col items-center justify-center">
          <h2 className={`inline-block text-dark dark:text-light
          text-5xl font-bold w-full capitalize xl:text-6xl text-center mt-4 tracking-wide leading-snug`}>Not Found!</h2>
        </div>
      )}
    </div>
  )
}

export default BaseArticle
