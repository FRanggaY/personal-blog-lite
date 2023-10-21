import { ArticleLayoutProps } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const ArticleLayoutRelative = ({ article, lang }:ArticleLayoutProps) => {
  const publishedAt =
    article.publishedAt.includes('-')
    ? format(new Date(article.publishedAt), "dd MMMM yyyy")
    : '';
  const path = usePathname()
  const currentPath = path;
  const currentLang = currentPath.split("/")[1];
  return (
    <div className="p-5 group text-dark dark:text-light md:basis-3/12">
      <Link href={`/${currentLang}/${article.slug}`} className="rounded-xl overflow-hidden">
        {
          article.imageUrl &&
          <Image
            src={article.imageUrl.replace("../public", "")}
            alt={article.title}
            width={100}
            height={100}
            className="aspect-[4/3] w-full group-hover:scale-105 transition-all ease duration-300"
          />
        }
      </Link>

      <div className="flex flex-col mt-5">
        <span className="uppercase text-cyan-600 dark:text-accentDark font-semibold text-xs sm:text-sm">
        {
          article.categories?.map((category:any, index:any) => {
            return (
              <Link key={category.id} href={`?category=${category.label.toLowerCase()}`}>
                {category.label}
                {index < article.categories.length - 1 && ', '}
              </Link>
            );
          })
        }
        </span>
        <Link href={`/${currentLang}/${article.slug}`} className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-cyan-500 to-cyan-600  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {article.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {publishedAt}
        </span>
      </div>
    </div>
  );
};

export default ArticleLayoutRelative;
