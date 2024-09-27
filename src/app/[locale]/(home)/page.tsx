import ArticleListLatest from '@/components/Article/ArticlesListLatest';
import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { LanguageParams } from '@/types/general';
import { dataLocale, validLocale } from '@/lib/locale';

export default async function Home({ params }: { readonly params: LanguageParams }) {
  const locale = validLocale(params.locale);
  const tBody = dataLocale[locale].landing;
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
          <ArticleListLatest articles={articles} title={tBody.title.latest} language={locale} />
        </Container>
      </Section>
    )
  } catch (err) {
    console.error(err)
    return <p className='text-center dark:text-white text-black mt-5'>Article not found</p>
  }

}
