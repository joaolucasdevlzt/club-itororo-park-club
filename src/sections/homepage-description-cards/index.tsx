import React from 'react';

import { Box, Grid } from '@mui/material';

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
        image="beach"
        title="Trabalhando há 15 anos no ramo de turismo"
        text="Desde 2009 atendendo viajantes em Uberlândia."
      />
      <CardWithTitleAndText
        image="geisha"
        title="Agentes especializados"
        text="Nossa equipe está pronta para te auxiliar tanto durante a compra quanto em alterações na viagem"
      />
      <CardWithTitleAndText
        image="disney"
        title="Pacotes, passagens, hotéis e muito mais"
        text="Monte sua viagem personalizada e tenha assistência em seguros, aluguéis e ingressos."
      />
    </Box>
  );
}
