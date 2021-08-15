import AnalyticsServicesScripts from '~/components/AnalyticsScript/AnalyticsScript';
import Home from '~/scenes/Home/Home';
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
