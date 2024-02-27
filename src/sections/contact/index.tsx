import React from 'react';

import { Grid, useTheme, useMediaQuery } from '@mui/material';

import CTACard from 'src/components/cta-card';

export default function ContactsSection() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: { xs: 3, md: 0 },
      }}
    >
      <Grid item xs={12} md={5.9}>
        <CTACard
          fn={() =>
            window.open(
              'https://api.whatsapp.com/send/?phone=553432556831&text=Ol%C3%A1%2C+tenho+interesse+nessa+oferta+exclusiva%21&type=phone_number&app_absent=0',
              '_blank'
            )
          }
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
          fn={() =>
            window.open(
              'https://api.whatsapp.com/send/?phone=553432556831&text=Ol%C3%A1%2C+tenho+interesse+nessa+oferta+exclusiva%21&type=phone_number&app_absent=0',
              '_blank'
            )
          }
          icon="headset-cta"
          text={
            downMd
              ? 'Prefere conversar pelo telefone? Estamos aguardando sua ligação'
              : 'Prefere conversar pelo telefone? Estamos aguardando sua ligação: (34) 3237.2515'
          }
          buttonText={downMd?"Ligue para nós":""}
          buttonProps={{
            color: '#28327F',
            '&:hover': { backgroundColor: '#28327F', color: 'white' },
          }}
        />
      </Grid>
    </Grid>
  );
}
