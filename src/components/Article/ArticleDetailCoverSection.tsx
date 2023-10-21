import { ArticleDetailProps } from '@/types'
import { format } from "date-fns";
import React from 'react'
import Image from "next/image";

function ArticleDetailCoverSection({ article, lang }: ArticleDetailProps) {
  const publishedAt =
    article.publishedAt.includes('-')
    ? format(new Date(article.publishedAt), "dd MMMM yyyy")
    : '';
  return (
    <div>
      <h2 className={`mb-5 inline-block text-dark dark:text-light
        text-2xl font-bold w-full capitalize xl:text-4xl text-center mt-4 tracking-wide leading-snug`}>{article.title}</h2>
      <div className='p-2'>
        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {lang == 'en' ? 'Eng' : 'Indo'} - {article.author} {publishedAt ? ` - ${publishedAt}` : ``}
        </span>
      </div>
      {
        article.imageUrl &&
        <Image
          src={article.imageUrl.replace("../public", "")}
          alt={article.title}
          width={100}
          height={100}
          unoptimized
          className="w-full mt-5"
        />
      }
    </div>
  )
}

export default ArticleDetailCoverSection
