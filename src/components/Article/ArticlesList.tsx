// components/ArticlesList.tsx
'use client'; // This makes the component a client component

import { useState } from 'react';
import Link from 'next/link';
import Article from '@/components/Article/Article';

export interface ArticleType {
  filename: string;
  slug: string;
  title: string;
  description?: string;
  categories: string[];
  updated_at?: string;
}

interface ArticlesListProps {
  articles: ArticleType[]; // Define the type for articles
}

export default function ArticlesList({ articles }: ArticlesListProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const ITEMS_PER_PAGE = 5;

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article?.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 ||
      article.categories.some(category => selectedCategories.includes(category));
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const displayedCount = Math.min(currentPage * ITEMS_PER_PAGE, filteredArticles.length);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  // Extract unique categories for filtering
  const allCategories = Array.from(new Set(articles.flatMap(article => article.categories)));

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 md:mb-16">
        {displayedCount} of {filteredArticles.length} articles
      </h1>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 border rounded"
      />

      <div>
        <h3>Filter by Category:</h3>
        <div className='flex flex-row flex-wrap gap-2 items-center'>
          {allCategories.map(category => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className='mr-1'
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <Article withSidebar={false}>

        <div className='mt-5'>
          {paginatedArticles.map(({ title, slug, description }) => (
            <Link href={`/articles/${slug}`} key={slug}>
              <div className="flex-1 mb-4 h-full md:mb-0 border p-5 mt-2">
                <h2 className="text-2xl font-bold">
                  {title}
                </h2>
                <p>{description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className='mt-5'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              disabled={currentPage === index + 1}
              className={`px-2 py-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </Article>
    </>
  );
}
