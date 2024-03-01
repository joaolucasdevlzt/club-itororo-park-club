// import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router';

import { Box, Grid, Typography } from '@mui/material';

import IconButton from 'src/components/icon-button';
import SectionWrapper from 'src/components/section-wrapper';

import ImageSection from 'src/sections/image-list';
import DestinationDescription from 'src/sections/destination-description';

import { mostWantedMock } from './mock';

export default function MostWantedDestinationsPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { id = 0 } = params;
  const mostWantedId = Number(id);

  return (
    <>
      <Helmet>
        <title> Lazertur</title>
      </Helmet>
      <SectionWrapper>
        <Grid container sx={{ display: 'flex' }}>
          <Grid item xs={12}>
            <Box sx={{ marginBottom: { xs: 0, md: 5 } }}>
              <IconButton
                iconSx={{ color: (t: any) => t.palette.secondary.main }}
                callback={() => navigate('/')}
                icon="gravity-ui:chevron-left"
                text="Voltar para home"
                direction="left"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={7.5}>
            <Typography
              variant="h2"
              sx={{
                mb: 5,
                display: { xs: 'block', lg: 'none' },
                fontFamily: 'Prompt-Regular',
                color: (t) => t.palette.secondary.main,
              }}
            >
              {mostWantedMock[mostWantedId].title}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <ImageSection images={mostWantedMock[mostWantedId].images} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <DestinationDescription
              title={mostWantedMock[mostWantedId].title}
              texts={mostWantedMock[mostWantedId].texts}
            />
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  );
}
