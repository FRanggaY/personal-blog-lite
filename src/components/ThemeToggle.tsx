"use client";
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme); // Save to localStorage
  };

  useEffect(() => {
    setDarkMode(localStorage.getItem('theme') === 'dark');
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button onClick={toggleTheme}>
      {darkMode ?
        // 'Light'
        <FaSun className="text-black dark:text-blue-100 dark:hover:text-white w-5 h-5" />
        :
        // 'Dark'
        <FaMoon className="text-black dark:text-blue-100 dark:hover:text-white w-5 h-5" />
      }
    </button>
  );
};

export default ThemeToggle;
