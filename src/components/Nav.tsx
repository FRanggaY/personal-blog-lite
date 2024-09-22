import Link from 'next/link';
import MyLogo from '@/../public/assets/image/logo.png'

import Section from '@/components/Section';
import Container from '@/components/Container';
import { metaData } from '@/lib/metaData';
import Image from 'next/image';
import SocialMedia from './SocialMedia';

const Nav = () => {
  return (
    <nav className="bg-white text-black dark:bg-spacejelly-gray-dark dark:text-blue-100 [&_a]:block [&_a]:no-underline">
      <Section className="py-4 md:py-6">
        <Container className="flex justify-between items-center">
          <div>
            <Link href="/" className='text-2xl font-bold'>
              <Image
                priority
                src={MyLogo}
                width={50}
                alt={metaData.creator ?? 'profile'}
                className='p-2 rounded-lg'
              />
              Personal Blog
            </Link>
          </div>
          <Link href="/articles" className='text-xl'>
            Articles
          </Link>
          <SocialMedia />
        </Container>
      </Section>
    </nav>
  )
}

export default Nav;
