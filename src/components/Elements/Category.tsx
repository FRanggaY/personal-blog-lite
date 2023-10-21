"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Category = ({ categories, lang }: any) => {
  const path = usePathname()
  const currentPath = path;
  const currentLang = currentPath.split("/")[1];
  const newPath = currentPath.replace(`/${currentLang}`, `/${lang}`);
  return (
    <div>
      <Link
        href={`${newPath}`}
        key={'all'}
        className={"inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base"}
      >
        All
      </Link>
      {categories?.map((data: any) => (
        <Link
          href={`?category=${data.label.toLowerCase()}`}
          key={data.id}
          className={"inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base"}
        >
          {data.label}
        </Link>
      ))}
    </div>
  )
}

export default Category
