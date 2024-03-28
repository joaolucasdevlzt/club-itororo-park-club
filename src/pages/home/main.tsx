import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { request } from 'src/utils/fetch';

import SectionWrapper from 'src/components/section-wrapper';

import FAQ from 'src/sections/faq';
import ContactsSection from 'src/sections/contact';
import AboutUsSection from 'src/sections/about-us';
import StayInTouch from 'src/sections/stay-in-touch';
import Carousel from 'src/sections/carousel/carousel';
import GroupCompanies from 'src/sections/group-companies';
import HighlightPackageSection from 'src/sections/highlight-package';
import MostWantedDestinations from 'src/sections/most-wanted-destinations';
import HomepageDescriptionCardsSection from 'src/sections/homepage-description-cards';

import { packageDescriptionMock } from '../package-details/mock';

export interface BucketData {
  url: string;
  name: string;
  timeCreated: string;
}

export default function HomePage() {
  const [isLoading, setLoading] = useState(true);
  const [rows, setRows] = useState<string[]>([]);

  const fetchImages = async () => {
    setLoading(true);
    const requests = await request.get<BucketData[]>('/ffo/images/lazertur-banners');
    const images = requests.map((item) => item.url);
    setRows(images);
    setLoading(false);
    console.log('requests', requests);
  };

  useEffect(() => {
    fetchImages();
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
      <SectionWrapper>
        <HighlightPackageSection
          sectionTitle="Pacotes em destaque"
          packageList={packageDescriptionMock}
        />
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
