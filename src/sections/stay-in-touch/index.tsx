import { Box } from '@mui/material';
import React from 'react';
import ExclusiveOffers from 'src/components/exclusive-offers';
import Newsletter from 'src/components/newsletter';

export default function StayInTouch() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: 3,
      }}
    >
      <ExclusiveOffers />
      <Newsletter />
    </Box>
  );
}
