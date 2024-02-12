import { Helmet } from 'react-helmet-async';

import Banner from 'src/components/banner';
import SectionWrapper from 'src/components/section-wrapper';
import ExclusiveOffers from 'src/components/exclusive-offers';

import ContactsSection from 'src/sections/contact';
import HighlightPackageSection from 'src/sections/highlight-package';
import MostWantedDestinations from 'src/sections/most-wanted-destinations';

import { packaListMock } from './mock';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Lazertur</title>
      </Helmet>
      <Banner images="/assets/images/contact/banner_topo.jpg" />
      <SectionWrapper>
        <HighlightPackageSection packageList={packaListMock} />
      </SectionWrapper>
      <SectionWrapper>
        <ContactsSection />
      </SectionWrapper>
      <SectionWrapper>
        <MostWantedDestinations />
      </SectionWrapper>
      <SectionWrapper>
        <ExclusiveOffers />
      </SectionWrapper>
    </>
  );
}
