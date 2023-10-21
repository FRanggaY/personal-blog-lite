"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/utils/dictionary";

export default function NotFound() {
  const path = usePathname();
  const [contentPage, setContentPage]: any = useState(null);

  const currentPath = path;
  let currentLang: any = currentPath.split("/")[1] || 'en';
  if (!['en', 'id'].includes(currentLang)) {
    currentLang = 'en';
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dict: any = await getDictionary(currentLang);

        if (dict) {
          setContentPage(dict.page);
        }
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };

    fetchData();
  }, [currentLang]);

  if (!contentPage) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  return (
    <main className="my-32 w-full dark:bg-dark flex justify-center font-mr">
      <div className="relative flex flex-col items-center justify-center">
        <h1 className={`inline-block text-dark dark:text-light
          text-6xl font-bold w-full capitalize xl:text-8xl text-center`}>404</h1>
        <h2 className={`inline-block text-dark dark:text-light
          text-5xl font-bold w-full capitalize xl:text-6xl text-center mt-4 tracking-wide leading-snug`}>{contentPage.not_found.title}</h2>
        <Link
          href={`/${currentLang}`}
          className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
            font-semibold text-light hover:border-dark hover:bg-light hover:text-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
          "
        >
          {contentPage.not_found.titleLink}
        </Link>
      </div>
    </main>
  );
}
