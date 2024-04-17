import React from 'react';

import { Box } from '@mui/material';

export default function CorporatePage() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          aspectRatio: '16/7.3',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: { xs: 'center' },
          backgroundSize: { xs: '170%', sm: 'cover' },

          backgroundImage: 'url(/assets/images/corporate/corporate_hero.png)',
        }}
      />
      <Box
        sx={{
          mt: 200,
          width: '100%',
          aspectRatio: '16/7',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url(/assets/images/corporate/corporate_hero.png)',
        }}
      />
    </>
  );
}
