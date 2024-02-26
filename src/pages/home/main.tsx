import { Helmet } from 'react-helmet-async';

import Banner from 'src/components/banner';
import SectionWrapper from 'src/components/section-wrapper';
import CardWithTitleAndText from 'src/components/card-with-title-and-text';

import FAQ from 'src/sections/faq';
import ContactsSection from 'src/sections/contact';
import AboutUsSection from 'src/sections/about-us';
import StayInTouch from 'src/sections/stay-in-touch';
import GroupCompanies from 'src/sections/group-companies';
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
        <CardWithTitleAndText
          image="disney"
          title="Pacotes, passagens, hotéis e muito mais"
          text="Monte sua viagem personalizada e tenha assistência em seguros, aluguéis e ingressos."
        />
      </SectionWrapper>
      <SectionWrapper>
        <HighlightPackageSection sectionTitle="Pacote em destaque" packageList={packaListMock} />
      </SectionWrapper>
      <SectionWrapper>
        <ContactsSection />
      </SectionWrapper>
      <SectionWrapper>
        <MostWantedDestinations />
      </SectionWrapper>
      <SectionWrapper>
        <StayInTouch />
      </SectionWrapper>
      <SectionWrapper>
        <AboutUsSection />
      </SectionWrapper>
      <SectionWrapper>
        <GroupCompanies />
      </SectionWrapper>
      <SectionWrapper>
        <FAQ />
      </SectionWrapper>
    </>
  );
}
