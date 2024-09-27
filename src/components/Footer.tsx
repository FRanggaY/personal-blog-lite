import Section from '@/components/Section';
import Container from '@/components/Container';
import { metaData } from '@/lib/metaData';
import SocialMedia from './SocialMedia';

const Footer = () => {
  const authorName = metaData.creator;
  const authorUrl = process.env.NEXT_PUBLIC_AUTHOR_URL;

  return (
    <footer className="border-t-4 bg-white text-black dark:bg-spacejelly-gray-dark dark:text-blue-100">
      <Section className="text-center py-2 md:py-4 m-0">
        <Container className="flex flex-row items-center justify-center text-center py-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex items-center justify-center gap-5">
              <p className="text-lg">
                &copy; {new Date().getFullYear()} Personal Blog <a href={authorUrl} className="font-semibold hover:text-white">{authorName}</a>. All rights reserved
              </p>
              <p>{process.env.NEXT_PUBLIC_APP_VERSION}</p>
              <SocialMedia />
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer;
