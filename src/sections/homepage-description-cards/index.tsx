import React from 'react';

import { Box } from '@mui/material';

import CardWithTitleAndText from 'src/components/card-with-title-and-text';

export default function HomepageDescriptionCardsSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 3,
        pb: 3,
        overflowX: 'scroll',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '12px',
          height: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#E33149',
          borderRadius: '6px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#D7DDE0',
          height: '2px',
          borderRadius: '6px',
        },
      }}
    >
      <CardWithTitleAndText
        key={1}
        image="itoro1"
        title=""
        text=""
      />
      <CardWithTitleAndText
        key={2}
        image="itoror2"
        title=""
        text=""
      />
      <CardWithTitleAndText
        key={3}
        image="itoro3"
        title=""
        text=""
      />
       <CardWithTitleAndText
        key={4}
        image="itoro5"
        title=""
        text=""
      />
        <CardWithTitleAndText
        key={5}
        image="itoro10"
        title=""
        text=""
      />
        <CardWithTitleAndText
        key={6}
        image="itoro11"
        title=""
        text=""
      />
    </Box>
  );
}
