import articleThreeData from '@/data/article/articleThreeData.json';
import articleFourData from '@/data/article/articleFourData.json';
import articleFiveData from '@/data/article/articleFiveData.json';
import articleSixData from '@/data/article/articleSixData.json';

export const selectArticleData = (slug:any, lang:any) => {
  switch (true) {
    case slug === 'ubuntu-20-04-nginx-upload-large-size-got-forbidden-in-aws' && lang === 'en':
      return articleThreeData;
    case slug === 'ubuntu-20-04-install-docker-with-docker-compose' && lang === 'en':
      return articleFourData;
    case slug === 'ubuntu-20-04-manage-postgresql-12' && lang === 'en':
      return articleFiveData;
    case slug === 'ubuntu-20-04-manage-nginx-1-18' && lang === 'en':
      return articleSixData;
    default:
      return '';
  }
};
