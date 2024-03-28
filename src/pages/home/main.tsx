import { Helmet } from 'react-helmet-async';
import { Dispatch, useState, useEffect, SetStateAction } from 'react';

import httpRequest from 'src/utils/httpRequest';

import Banner from 'src/components/banner';
import SectionWrapper from 'src/components/section-wrapper';
import { LoadingScreen } from 'src/components/loading-screen';

import FAQ from 'src/sections/faq';
import ContactsSection from 'src/sections/contact';
import AboutUsSection from 'src/sections/about-us';
import StayInTouch from 'src/sections/stay-in-touch';
import GroupCompanies from 'src/sections/group-companies';
import HighlightPackageSection from 'src/sections/highlight-package';
import MostWantedDestinations from 'src/sections/most-wanted-destinations';
import HomepageDescriptionCardsSection from 'src/sections/homepage-description-cards';

import { HighlightPackagesInterface } from '../package-details/static';

// ----------------------------------------------------------------------

const getAllHighlightPackage = async (
  setData: (info: HighlightPackagesInterface[]) => void,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const data = await httpRequest(`/lazertur/highlight-packages`, {}, 'get');
  setData(data);
  setLoading(false);
};

export default function HomePage() {
  const [allHighlightPackages, setAll] = useState<HighlightPackagesInterface[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    getAllHighlightPackage(setAll, setLoading);
  }, []);
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        {process.env.NODE_ENV === 'development' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <title>Lazertur - Homepage</title>
      </Helmet>
      <Banner images="/assets/images/lazertur/banner_home.jpg" />
      <SectionWrapper>
        <HomepageDescriptionCardsSection />
      </SectionWrapper>
      {!!allHighlightPackages.length && (
        <SectionWrapper>
          <HighlightPackageSection
            sectionTitle="Pacotes em destaque"
            packageList={allHighlightPackages}
          />
        </SectionWrapper>
      )}
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
