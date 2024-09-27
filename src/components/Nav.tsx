"use client"

import Link from 'next/link';
import MyLogo from '@/../public/assets/image/logo.png'

import Section from '@/components/Section';
import Container from '@/components/Container';
import { metaData } from '@/lib/metaData';
import Image from 'next/image';
import SocialMedia from './SocialMedia';
import ThemeToggle from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useParams } from 'next/navigation';
import { dataLocale, validLocale } from '@/lib/locale';

const Nav = () => {
  const params = useParams<{ locale: string; }>();
  const locale = validLocale(params.locale);
  const tHead = dataLocale[locale].navbar;

  return (
    <nav className="bg-white text-black dark:bg-spacejelly-gray-dark dark:text-blue-100 [&_a]:block [&_a]:no-underline">
      <Section className="py-4 md:py-6">
        <Container className="flex justify-between items-center">
          <div>
            <Link href={`/${params.locale}`} className='text-2xl font-bold'>
              <Image
                priority
                src={MyLogo}
                width={50}
                alt={metaData.creator ?? 'profile'}
                className='p-2 rounded-lg'
              />
              {tHead.personal.title}
            </Link>
          </div>
          <Link href={`/${params.locale}/articles`} className='text-xl'>
            {tHead.title.article}
          </Link>

          <div className='flex gap-4'>
            <ThemeToggle />
            <LanguageToggle />
            <SocialMedia />
          </div>
        </Container>
      </Section>
    </nav>
  )
}

export default Nav;
