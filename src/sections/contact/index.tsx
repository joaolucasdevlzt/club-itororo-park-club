import React from 'react';

import { Grid } from '@mui/material';

import CTACard from 'src/components/cta-card';

export default function ContactsSection() {
  return (
    <Grid container sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
      <Grid item xs={12} md={5.9}>
        <CTACard
          icon="msg-cta"
          text="Atendimento via chat personalizado para montar seu pacote"
          buttonText="Fale com um agente"
          buttonProps={{
            color: '#28327F',
            '&:hover': { backgroundColor: '#28327F', color: 'white' },
          }}
        />
      </Grid>
      <Grid item xs={12} md={5.9}>
        <CTACard
          icon="headset-cta"
          text="Prefere conversar pelo telefone? Estamos aguardando sua ligação"
          buttonText="Ligue para nós"
          buttonProps={{
            color: '#28327F',
            '&:hover': { backgroundColor: '#28327F', color: 'white' },
          }}
        />
      </Grid>
    </Grid>
  );
}
