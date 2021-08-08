import { NextSeo } from 'next-seo';
import siteMetaData from '~/data/seo';

function SEO() {
  return <NextSeo {...siteMetaData} />;
}

export default SEO;
