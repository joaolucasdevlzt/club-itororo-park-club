// import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router';

import { Box, Grid, Typography } from '@mui/material';

import httpRequest from 'src/utils/httpRequest';

import IconButton from 'src/components/icon-button';
import SectionWrapper from 'src/components/section-wrapper';

import ImageSection from 'src/sections/image-list';
import DestinationDescription from 'src/sections/destination-description';

const getDestinations = async (id: string, setData: (info: []) => void) => {
  const data = await httpRequest(`/lazertur/destinations/${id}`, {}, 'get');
  setData(data);
};
export default function MostWantedDestinationsPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { id = '' } = params;
  const [destination, setDestination] = useState<any>({
    content: '<div/>',
    id: '',
    h1: '',
    folder: [],
  });
  useEffect(() => {
    getDestinations(id, setDestination);
  }, [id]);
  const normalizedData = ((): { content: string; id: string; h1: string; images: [] } => {
    const htmls = document.createElement('div');
    htmls.innerHTML = destination.content;
    const h1 = htmls.getElementsByTagName('h1').length
      ? htmls.getElementsByTagName('h1')[0].innerText
      : '';

    return { id: destination.id, content: destination.content, h1, images: destination.folder };
  })();
  if (!normalizedData) {
    return <Box />;
  }
  return (
    <>
      <Helmet>
        {process.env.NODE_ENV === 'development' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <title>Lazertur - Destinos mais procurados</title>
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
              variant="h1"
              sx={{
                mb: 5,
                display: { xs: 'block', lg: 'none' },
                fontFamily: 'Prompt-Regular',
                color: (t) => t.palette.secondary.main,
              }}
            >
              {normalizedData.h1}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <ImageSection images={normalizedData.images} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <DestinationDescription title={normalizedData.h1} texts={normalizedData.content} />
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  );
}
