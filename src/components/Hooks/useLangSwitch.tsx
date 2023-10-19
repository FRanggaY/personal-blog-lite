"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useLangSwitch() {
  const storageKey = "lang";
  const url = useRouter()
  const path = usePathname()

  // Check if this is the initial load or a selection change
  const [initialLoad, setInitialLoad] = useState(true);
  const [mode, setMode] = useState("en");

  const toggleLang = (lang:any) => {
    if (lang === "en") {
      document.documentElement.lang = "en";
    } else {
      document.documentElement.lang = "id";
    }
    window.localStorage.setItem(storageKey, lang);

    const currentPath = path;
    const currentLang = currentPath.split("/")[1]; // Get the initial language segment

    if (currentPath === '/' || currentLang !== lang) {
      const newPath = currentPath.replace(`/${currentLang}`, `/${lang}`);
      url.push(newPath);
    }
  };

  const getStoredLang = () => {
    return window.localStorage.getItem(storageKey);
  };

  // Initialize the lang from local storage on the initial load
  useEffect(() => {
    if (initialLoad) {
      const storedlang = getStoredLang();
      if (storedlang) {
        setMode(storedlang);
      } else {
        // Set the default lang if no lang is stored
        setMode("en");
      }
      setInitialLoad(false);
    }
  }, [initialLoad]);

  // Update the lang when the mode changes
  useEffect(() => {
    if (!initialLoad) {
      toggleLang(mode);
      // Store the lang in local storage
      window.localStorage.setItem(storageKey, mode);
    }
  }, [mode, initialLoad]);

  return [mode, setMode];
}
