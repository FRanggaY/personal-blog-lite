import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

import Section from '@/components/Section';
import Container from '@/components/Container';
import ArticlesList from '@/components/Article/ArticlesList'; // New client component
import { dataLocale, validLocale } from '@/lib/locale';
import { LanguageParams } from '@/types/general';

export const metadata = {
  title: 'Articles',
  description: 'article.'
};

export default async function Articles({ params }: { readonly params: LanguageParams }) {
  const locale = validLocale(params.locale);
  const tBody = dataLocale[locale].article;
  const filenames = await fs.readdir(path.join(process.cwd(), `src/articles/${locale}`));

  interface Frontmatter {
    title: string;
    categories: string[];
  }

  try {
    const articles = await Promise.all(filenames.map(async (filename) => {
      const content = await fs.readFile(path.join(process.cwd(), `src/articles/${locale}`, filename), 'utf-8');
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: content,
        options: {
          parseFrontmatter: true
        }
      });
      return {
        filename,
        slug: filename.replace('.mdx', ''),
        ...frontmatter
      };
    }));

    return (
      <Section spacing="compact" backgroundColor='theme'>
        <Container>
          {/* Pass articles as props to the client component */}
          <ArticlesList articles={articles} title={tBody.title.article} category_title={tBody.title.filter_by_category} language={locale} />
        </Container>
      </Section>
    );
  } catch (err) {
    console.error(err)
    return <p className='text-center dark:text-white text-black mt-5'>Article not found</p>
  }
}
