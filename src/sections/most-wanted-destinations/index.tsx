import { useNavigate } from 'react-router';

import { Box, Grid, Typography } from '@mui/material';

import Image from 'src/components/hover-image';

export default function MostWantedDestinations() {
  const navigate = useNavigate();
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
          <Image fn={() => navigate('destinos-mais-procurados/0')} image="maceio" title="Maceió" />
        </Grid>
        <Grid item xs={12} md={5.9}>
          <Image
            fn={() => navigate('destinos-mais-procurados/1')}
            image="rio"
            title="Rio de Janeiro"
          />
        </Grid>
      </Grid>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        <Grid item xs={3.9}>
          <Image
            fn={() => navigate('destinos-mais-procurados/2')}
            image="gramado"
            title="Gramado"
            aspectRatio="4/3"
          />
        </Grid>
        <Grid item xs={3.9}>
          <Image
            fn={() => navigate('destinos-mais-procurados/3')}
            image="orlando"
            title="Orlando"
            aspectRatio="4/3"
          />
        </Grid>
        <Grid item xs={3.9}>
          <Image
            fn={() => navigate('destinos-mais-procurados/4')}
            image="bariloche"
            title="Bariloche"
            aspectRatio="4/3"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
