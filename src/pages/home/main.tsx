import { Helmet } from 'react-helmet-async';

import SectionWrapper from 'src/components/section-wrapper';

import FAQ from 'src/sections/faq';
// import ContactsSection from 'src/sections/contact';
import AboutUsSection from 'src/sections/about-us';
import Carousel from 'src/sections/carousel/carousel';
import HomepageDescriptionCardsSection from 'src/sections/homepage-description-cards';

export default function HomePage() {
  // Imagens do Carrossel (Definidas Manualmente)
  const carouselImages: any = [
    '/assets/images/lazertur/sociotoror1.jpg',
    '/assets/images/lazertur/sociotoro2.jpg',
 
  
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Homepage" />
        <title>Itororó Park Club</title>
      </Helmet>

      {/* Carrossel de Imagens */}
      <Carousel images={carouselImages} />

      <SectionWrapper>
        <HomepageDescriptionCardsSection />
      </SectionWrapper>


  

      <SectionWrapper>
        <AboutUsSection />
      </SectionWrapper>

 


      <SectionWrapper>
        <FAQ />
      </SectionWrapper>
    </>
  );
}
