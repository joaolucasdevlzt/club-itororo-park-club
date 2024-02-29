// import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import { Grid, Typography } from '@mui/material';

import SectionWrapper from 'src/components/section-wrapper';

import ImageSection from 'src/sections/image-list';
import DestinationDescription from 'src/sections/destination-description';

export default function MostWantedDestinationsPage() {
  // const params = useParams();
  // // const { id } = params;
  return (
    <>
      <Helmet>
        <title> Lazertur</title>
      </Helmet>
      <SectionWrapper>
        <Grid container sx={{ display: 'flex' }}>
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
              Rio de Janeiro
            </Typography>
          </Grid>
          <Grid item xs={12} lg={7.5}>
            <ImageSection images={[]} />
          </Grid>
          <Grid item xs={12} lg={4.5}>
            <DestinationDescription />
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  );
}
