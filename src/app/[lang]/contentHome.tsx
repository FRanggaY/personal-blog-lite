"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getDictionary } from "@/app/lib/dictionary";
import { i18n } from "@/app/i18n.config";

export default function ContentHome({ lang }:any) {
  const router = useRouter();
  const [contentPage, setContentPage]:any = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const defaultLocale = i18n.defaultLocale;
        const dict:any = await getDictionary(lang);

        if (dict) {
          setContentPage(dict.page);
        } else {
          console.log(`No lang found, redirecting to ${defaultLocale}`);
          router.push(defaultLocale);
        }
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };

    fetchData();
  }, [lang, router]);

  if (!contentPage) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{contentPage.home.title}</h1>
        <p className='text-gray-500'>{contentPage.home.description}</p>
      </div>
    </section>
  );
}
