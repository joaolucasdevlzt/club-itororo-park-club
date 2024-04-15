import { useState } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import SectionWrapper from 'src/components/section-wrapper';

import FAQ from 'src/sections/faq';

import FaqDisplay from './faq-display';

const categories = [
  { name: 'Bagagem e check-in', icon: 'assets/icons/lazertur/ic_luggage_2.svg' },
  { name: 'Cancelamentos e reembolsos', icon: 'assets/icons/lazertur/ic_flight_cancelled.svg' },
  {
    name: 'Viagens com crianças ou animais de estimação',
    icon: 'assets/icons/lazertur/ic_pets.svg',
  },
  { name: 'Serviços adicionais', icon: 'assets/icons/lazertur/ic_medical_insurance.svg' },
];

export default function HelpPage() {
  const [showCategories, setShow] = useState<boolean>(true);
  const [topics, setTopics] = useState<0 | 1 | 2 | 3 | number>(0);
  if (showCategories) {
    return (
      <>
        <SectionWrapper>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h3" sx={{ fontFamily: 'Prompt-Medium', color: '#28327F' }}>
              Escolha uma categoria
            </Typography>
            <Grid
              container
              sx={{
                marginTop: 5,
                display: 'flex',
                justifyContent: 'space-between',
                gap: { xs: 2, md: 0 },
              }}
            >
              {categories.map((item, index) => (
                <Grid
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setShow(false);
                    setTopics(index);
                  }}
                  key={item.name}
                  item
                  xs={12}
                  sm={5.8}
                  md={2.9}
                  sx={{
                    backgroundColor: 'white',
                    display: 'flex',
                    padding: 3,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    border: '1px solid #E5E6EE',
                    borderRadius: 1,
                    '&:hover': {
                      transition: '1s all',
                      cursor: 'pointer',
                      border: '1px solid #E33149',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '150px',
                      aspectRatio: '1',
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: `url(${item.icon})`,
                      backgroundPosition: 'center',
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'Prompt-Regular',
                      color: (t) => t.palette.secondary.main,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </SectionWrapper>
        <SectionWrapper>
          <FAQ />
        </SectionWrapper>
      </>
    );
  }
  return <FaqDisplay onDismiss={setShow} chosenTopics={topics} />;
}
