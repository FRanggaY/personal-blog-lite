import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

import Section from '@/components/Section';
import Container from '@/components/Container';
import ArticlesList from '@/components/Article/ArticlesList'; // New client component

export const metadata = {
  title: 'Articles',
  description: 'article.'
};

export default async function Articles() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'src/articles'));

  interface Frontmatter {
    title: string;
    categories: string[];
  }

  const articles = await Promise.all(filenames.map(async (filename) => {
    const content = await fs.readFile(path.join(process.cwd(), 'src/articles', filename), 'utf-8');
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
        <ArticlesList articles={articles} />
      </Container>
    </Section>
  );
}
