import { compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs';
import path from 'path';
import ArticleHeader from '@/components/Article/ArticleHeader';
import ArticleContent from '@/components/Article/ArticleContent';
import ArticleSidebar from '@/components/Article/ArticleSidebar';
import ArticleImage from '@/components/Article/ArticleImage';
import Checklist from '@/components/Checklist';
import CodeBlock from '@/components/CodeBlock';
import Container from '@/components/Container';

export default async function ArticlePage({ params }: { params: { articleSlug: string } }) {

  try {
    const content = await fs.readFile(path.join(process.cwd(), 'src/articles', `${params.articleSlug}.mdx`), 'utf-8');
    interface Frontmatter {
      title: string;
    }

    const data = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true
      },
      components: {
        ArticleHeader,
        ArticleContent,
        ArticleSidebar,
        Checklist,
        ArticleImage,
        CodeBlock,
      }
    })
    return (
      <Container className="mt-10 text-black dark:text-white bg-white dark:bg-black">
        {/* <h1>{ data.frontmatter.title }</h1> */}
        {data.content}
      </Container>
    )
  }catch (err) {
    console.error(err)
    return <>Article not found</>
  }


}
