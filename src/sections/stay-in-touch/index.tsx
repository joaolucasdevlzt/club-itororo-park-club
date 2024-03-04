import React from 'react';

import { Box } from '@mui/material';

import Newsletter from 'src/components/newsletter';
import ExclusiveOffers from 'src/components/exclusive-offers';

export default function StayInTouch() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        gap: 4,
      }}
    >
      <ExclusiveOffers />
      <Newsletter />
    </Box>
  );
}
