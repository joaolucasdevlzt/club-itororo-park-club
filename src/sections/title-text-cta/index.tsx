import React from 'react';

import { Box, Typography } from '@mui/material';

import StyledButton from 'src/components/button';

export default function TitleTextAndCTA({ title, text }: { title: string; text: string }) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        flexDirection: { xs: 'column', md: 'row' },
        display: 'flex',
        border: '1px solid #E5E6EE',
        borderRadius: 3,
        overflow: 'clip',
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '16/9',
          backgroundPosition: { xs: 'center', sm: 'right' },
          backgroundSize: 'cover',
          backgroundImage: 'url(assets/images/lazertur/services/girl_on_the_rocks.png)',
        }}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          pl: { xs: 5, sm: 8 },
          pr: { xs: 5, sm: 8 },
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            
            mt: 3,
            mb: 3,
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              lineBreak: 'strict',
              fontFamily: 'Kanit-Regular',

              color: (t) => t.palette.secondary.main,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              lineBreak: 'strict',
              fontFamily: 'Kanit-Light',
              fontSize: 18,
              color: (t) => t.palette.secondary.main,
            }}
          >
            {text}
          </Typography>
        </Box>

        <StyledButton
          sx={{ width: 'fit-content', pl: 5, pr: 5, mb:5 }}
          text="Adquira seu seguro"
          callback={() =>
            window.open(
              'https://api.whatsapp.com/send/?phone=553432556831&text=Ol%C3%A1%2C+tenho+interesse+nessa+oferta+exclusiva%21&type=phone_number&app_absent=0',
              '_blank'
            )
          }
        />
      </Box>
    </Box>
  );
}
