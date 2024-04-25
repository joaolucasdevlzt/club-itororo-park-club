import { Helmet } from 'react-helmet-async';
import { useState, Dispatch, useEffect, SetStateAction } from 'react';

import { request } from 'src/utils/fetch';
import httpRequest from 'src/utils/httpRequest';

import SectionWrapper from 'src/components/section-wrapper';

import FAQ from 'src/sections/faq';
import ContactsSection from 'src/sections/contact';
import AboutUsSection from 'src/sections/about-us';
import StayInTouch from 'src/sections/stay-in-touch';
import Carousel from 'src/sections/carousel/carousel';
import GroupCompanies from 'src/sections/group-companies';
import CorporateAndExperienceSection from 'src/sections/corp-exp';
import HighlightPackageSection from 'src/sections/highlight-package';
import MostWantedDestinations from 'src/sections/most-wanted-destinations';
import HomepageDescriptionCardsSection from 'src/sections/homepage-description-cards';

import { HighlightPackagesInterface } from '../package-details/static';

export interface BucketData {
  url: string;
  name: string;
  timeCreated: string;
}

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
  const [isLoading, setLoading] = useState(true);
  const [rows, setRows] = useState<string[]>([]);

  const fetchImages = async () => {
    setLoading(true);
    const requests = await request.get<BucketData[]>('/ffo/images/lazertur-banners');
    const images = requests.map((item) => item.url);
    setRows(images);
    setLoading(false);
  };
  useEffect(() => {
    fetchImages();
    getAllHighlightPackage(setAll, setLoading);
  }, []);

  return (
    <>
      <Helmet>
        {process.env.NODE_ENV === 'development' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <title>Lazertur - Homepage</title>
      </Helmet>
      {!isLoading && rows && <Carousel images={rows} />}
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
        <CorporateAndExperienceSection />
      </SectionWrapper>
      <SectionWrapper>
        <FAQ />
      </SectionWrapper>
    </>
  );
}
