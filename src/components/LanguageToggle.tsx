"use client"

import * as React from "react"

import { useParams, usePathname, useRouter } from "next/navigation"

export function LanguageToggle() {
  const params = useParams<{ locale: string; }>();
  const pathName = usePathname();
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    let replacedUrl = `/${lang}`
    if(pathName !== '/'){
      replacedUrl = pathName.replace(params.locale, lang)
    }
    router.replace(replacedUrl)
  }

  return (
    <select name="language" defaultValue={params.locale} onChange={(e) => handleLanguageChange(e.target.value)} className="text-black bg-white dark:text-white dark:bg-black">
      <option value="id">ID</option>
      <option value="en">EN</option>
    </select>
  )
}
