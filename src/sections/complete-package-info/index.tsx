import React from 'react';
import { useNavigate } from 'react-router';

import { Box, Grid } from '@mui/material';

import { packageDescriptionMock } from 'src/pages/package-details/mock';

import IconButton from 'src/components/icon-button';

import PriceCard from '../price-card';
import ImageSection from '../image-list';
import PackageDescription from '../package-description';

export default function CompletePackageInfo({ id }: { id: number }) {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        gap: { xs: 5, md: 0 },
      }}
    >
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
      <Grid item xs={12} md={6}>
        <ImageSection images={packageDescriptionMock[id].image} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          paddingLeft: 2,
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <PackageDescription data={packageDescriptionMock[id]} />
        <PriceCard data={packageDescriptionMock[id]} />
      </Grid>
    </Grid>
  );
}
