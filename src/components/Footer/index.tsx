"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../Button/CustomButton";
import { getDictionary } from "@/utils/dictionary";
import { usePathname } from "next/navigation";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Footer({ title }: any) {
  const [contentFooter, setContentFooter]: any = useState(null);
  const path = usePathname()
  const currentPath = path;
  const currentLang = currentPath.split("/")[1] || 'en'; // Get the initial language segment

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dict: any = await getDictionary(currentLang as 'en' | 'id');

        if (dict) {
          setContentFooter(dict.footer);
        }
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };

    fetchData();
  }, [currentLang]);

  if (!contentFooter) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  return (
    <footer className='bg-zinc-100 dark:bg-slate-800 flex flex-col text-black-100  mt-5'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src='/assets/image/logo.png' alt='logo' width={100} height={100} className='object-contain' />
          <CustomButton
            title={'Top'}
            btnType='button'
            containerStyles='text-primary-blue dark:text-white rounded-full border border-gray min-w-[80px] h-10'
            handleClick={scrollTop}
          />
        </div>
        <div className="flex md:justify-end gap-5 flex-wrap flex-1">
          {contentFooter.data?.map((item: any) => (
            <div key={item.title} className="flex flex-col text-sm gap-6 min-w-[170px]">
              <h3 className="font-bold dark:text-white">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links?.map((link: any) => (
                  <Link
                    key={link.title}
                    href={link.url || '/'}
                    className="text-gray-500 dark:text-white"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='dark:text-white flex justify-between items-center flex-wrap mt-5 border-t border-gray-800 sm:px-16 px-6 py-4'>
        <p>@2023 {title}. All rights reserved</p>
        <div className="flex flex-1 gap-10 md:justify-end">
          <Link
            href="/sitemap.xml"
            className="text-gray-500 dark:text-white"
            target="_blank" rel="noopener noreferrer"
          >
            sitemap.xml
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
