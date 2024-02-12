import { Helmet } from 'react-helmet-async';

import Image from 'src/components/image';
import Banner from 'src/components/banner';
import SectionWrapper from 'src/components/section-wrapper';

import ContactsSection from 'src/sections/contact';
import HighlightPackageSection from 'src/sections/highlight-package';

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
    </>
  );
}
