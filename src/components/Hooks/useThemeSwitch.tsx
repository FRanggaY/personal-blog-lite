"use client";
import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const storageKey = "theme";

  // Check if this is the initial load or a selection change
  const [initialLoad, setInitialLoad] = useState(true);
  const [mode, setMode] = useState("dark");

  const toggleTheme = (theme:any) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getStoredTheme = () => {
    return window.localStorage.getItem(storageKey);
  };

  // Initialize the theme from local storage on the initial load
  useEffect(() => {
    if (initialLoad) {
      const storedTheme = getStoredTheme();
      if (storedTheme) {
        setMode(storedTheme);
      } else {
        // Set the default theme if no theme is stored
        setMode("dark");
      }
      setInitialLoad(false);
    }
  }, [initialLoad]);

  // Update the theme when the mode changes
  useEffect(() => {
    if (!initialLoad) {
      toggleTheme(mode);
      // Store the theme in local storage
      window.localStorage.setItem(storageKey, mode);
    }
  }, [mode, initialLoad]);

  return [mode, setMode];
}
