import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/material';

import Banner from 'src/components/banner';
import IconTextCard from 'src/components/icon-text-card';
import SectionWrapper from 'src/components/section-wrapper';

import OtherServicesSection from 'src/sections/services';

export default function Services() {
  return (
    <>
      <Helmet>
        {process.env.NODE_ENV === 'development' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <title>Itororó Park Club</title>
      </Helmet>
      <Banner images="assets/images/lazertur/services/banner_services.png" />
      <Box sx={{backgroundColor:'#F9FAFA'}}>
     
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
