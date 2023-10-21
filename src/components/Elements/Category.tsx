"use client"
import React from 'react'
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Category = ({ categories, lang }: any) => {
  const path = usePathname()
  const currentPath = path;
  const currentLang = currentPath.split("/")[1];
  const newPath = currentPath.replace(`/${currentLang}`, `/${lang}`);
  const searchParams = useSearchParams()
  const category = searchParams.get('category') ?? ''
  return (
    <div>
      <Link
        href={`${newPath}`}
        key={'all'}
        className={`${category == '' ? 'bg-dark text-light border-light dark:bg-light dark:text-black' : 'dark:text-white'} inline-block py-2 m-2 sm:py-3 px-6 sm:px-10 rounded-full capitalize font-semibold border-2 border-solid hover:scale-105 transition-all ease duration-200 text-sm sm:text-base`}
      >
        All
      </Link>
      {categories?.map((data: any) => (
        <Link
          href={`?category=${data.label.toLowerCase()}`}
          key={data.id}
          className={`${category == data.label.toLowerCase() ? 'bg-dark text-light border-light dark:bg-light dark:text-black' : 'dark:text-white'} inline-block py-2 m-2 sm:py-3 px-6 sm:px-10 rounded-full capitalize font-semibold border-2 border-solid hover:scale-105 transition-all ease duration-200 text-sm sm:text-base`}
        >
          {data.label}
        </Link>
      ))}
    </div>
  )
}

export default Category
