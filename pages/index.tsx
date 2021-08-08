import Head from 'next/head';
import AnalyticsServicesScripts from '~/components/AnalyticsScript/AnalyticsScript';
import Home from '~/components/Home/Home';
import SEO from '~/components/SEO/SEO';

export default function Index() {
  return (
    <div>
      <SEO />
      <AnalyticsServicesScripts />
      <Home />
    </div>
  );
}
