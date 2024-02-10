import { Box, Grid } from '@mui/material';

import Image from 'src/components/image';

export default function MostWantedDestinations() {
  return (
    <Box>
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'space-between', gap: { xs: 3, md: 0 } }}
      >
        <Grid item xs={12} md={5.9}>
          <Image image="maceio" title="Maceió" />
        </Grid>
        <Grid item xs={12} md={5.9}>
          <Image image="rio" title="Rio de Janeiro" />
        </Grid>
      </Grid>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        <Grid item xs={3.9}>
          <Image image="gramado" title="Gramado" aspectRatio='4/4' />
        </Grid>
        <Grid item xs={3.9}>
          <Image image="orlando" title="Orlando" aspectRatio='4/4' />
        </Grid>
        <Grid item xs={3.9}>
          <Image image="bariloche" title="Bariloche" aspectRatio='4/4' />
        </Grid>
      </Grid>
    </Box>
  );
}
