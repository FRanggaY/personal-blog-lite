import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Main from '@/components/Main';

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Nav />

      <Main>{ children }</Main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
