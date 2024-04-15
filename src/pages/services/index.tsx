import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/material';

import Banner from 'src/components/banner';
import IconTextCard from 'src/components/icon-text-card';
import SectionWrapper from 'src/components/section-wrapper';

import OtherServicesSection from 'src/sections/services';
import TitleTextAndCTA from 'src/sections/title-text-cta';

export default function Services() {
  return (
    <>
      <Helmet>
        {process.env.NODE_ENV === 'development' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <title>Lazertur - Serviços</title>
      </Helmet>
      <Banner images="assets/images/lazertur/services/banner_services.png" />
      <Box sx={{backgroundColor:'#F9FAFA'}}>
        <SectionWrapper>
          <TitleTextAndCTA
            title="Seguro de viagem"
            text="Tanto nas suas viagens nacionais quanto internacionais, você precisa de cuidados essenciais, então escolha um seguro viagem. Na Lazertur Viagens, você encontra as melhores opções de seguro para sua viagem e sua saúde. Adquira sua viagem e seu seguro, tudo em um só lugar, e viaje com toda a tranquilidade que a Lazertur pode te oferecer."
          />
        </SectionWrapper>
        <SectionWrapper>
          <IconTextCard />
        </SectionWrapper>
        <SectionWrapper>
          <OtherServicesSection />
        </SectionWrapper>
      </Box>
    </>
  );
}
