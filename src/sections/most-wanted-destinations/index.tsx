import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import httpRequest from 'src/utils/httpRequest';

import Image from 'src/components/hover-image';

import { Destinations } from './types';

interface htmlType {
  id: string;
  content: string;
  folder: [];
  h1: string;
}

const getDestinations = async (setDetinations: (info: []) => void) => {
  const data:[] = await httpRequest('/lazertur/destinations', {}, 'get');
  setDetinations(data);
};
export default function MostWantedDestinations() {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState<any[] | []>([]);
  useEffect(() => {
    getDestinations(setDestinations);
  }, []);
  if (destinations.length < 5 || !!destinations) {
    return <Box sx={{ height: 0 }} />;
  }
  const normalizedData = ((): Destinations[] | [] => {
    const normalized = (destinations as []).map((item: any) => {
      const htmls = document.createElement('div');
      htmls.innerHTML = item.content;
      const h1 = htmls.getElementsByTagName('h1').length
        ? htmls.getElementsByTagName('h1')[0].innerText
        : '';
      return { id: item.id, content: item.content, h1, images: item.folder };
    });
    return normalized;
  })();
  if (normalizedData.length < 5) return <Box />;
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: 30, sm: 40 },
          fontFamily: 'Prompt-Medium',
          fontWeight: '600',
          color: (t) => t.palette.secondary.main,
        }}
      >
        Destinos mais procurados
      </Typography>
      <Grid
        container
        sx={{
          marginTop: 6,
          display: 'flex',
          justifyContent: 'space-between',
          gap: { xs: 3, md: 0 },
        }}
      >
        <Grid item xs={12} md={5.9}>
          <Image
            fn={() => navigate(`destinos-mais-procurados/${normalizedData[0].id}`)}
            image={normalizedData[0]?.images[0]?.publicUrl || ''}
            title={normalizedData[0].h1}
          />
        </Grid>
        <Grid item xs={12} md={5.9}>
          <Image
            fn={() => navigate(`destinos-mais-procurados/${normalizedData[1].id}`)}
            image={normalizedData[1]?.images[0]?.publicUrl || ''}
            title={normalizedData[1].h1}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        <Grid item xs={3.9}>
          <Image
            fn={() => navigate(`destinos-mais-procurados/${normalizedData[2].id}`)}
            image={normalizedData[2]?.images[0]?.publicUrl || ''}
            title={normalizedData[2].h1}
            aspectRatio="4/3"
          />
        </Grid>
        <Grid item xs={3.9}>
          <Image
            fn={() => navigate(`destinos-mais-procurados/${normalizedData[3].id}`)}
            image={normalizedData[3]?.images[0]?.publicUrl || ''}
            title={normalizedData[3].h1}
            aspectRatio="4/3"
          />
        </Grid>
        <Grid item xs={3.9}>
          <Image
            fn={() => navigate(`destinos-mais-procurados/${normalizedData[4].id}`)}
            image={normalizedData[4]?.images[0]?.publicUrl || ''}
            title={normalizedData[4].h1}
            aspectRatio="4/3"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
