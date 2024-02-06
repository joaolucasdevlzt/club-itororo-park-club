import { Helmet } from 'react-helmet-async';

import Banner from 'src/components/banner';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Lazertur</title>
      </Helmet>
      <Banner
        images={['/assets/images/contact/banner_topo.jpg', '/assets/images/contact/hero.jpg']}
      />
     
    </>
  );
}
