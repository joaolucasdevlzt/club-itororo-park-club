import { Box, Typography } from '@mui/material';

import StyledButton from '../button';

export default function ExclusiveOffers() {
  return (
    <Box
      sx={{
        backgroundSize: { xs: 'cover' },
        backgroundPosition: { xs: 'right', md: 'center' },
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(/assets/background/lazertur/especial_offers.svg)`,
        aspectRatio: { xs: '4/3', md: '3/4' },
        borderRadius: 3,
        padding: { xs: 3, sm: 10, md: 5 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Typography
        sx={{ fontFamily: 'Prompt-Medium', fontSize: 32, textAlign: 'center', color: 'white' }}
      >
        Quer receber ofertas exclusivas?
      </Typography>
      <Typography
        sx={{ fontFamily: 'Kanit-ExtraLight', fontSize: 20, textAlign: 'center', color: 'white' }}
      >
        Participe do nosso grupo VIP no WhatsApp e seja o primeiro a saber das melhores ofertas.
      </Typography>
      <StyledButton
        text="Clique aqui para participar"
        callback={() => window.open('https://chat.whatsapp.com/Iux6c5E21nW10cHA2R2jAv', '-_blank')}
      />
      <Typography
        sx={{
          fontFamily: 'Kanit-ExtraLight',
          fontSize: 20,
          textAlign: 'center',
          color: 'white',
        }}
      >
        Ou leia o QR code abaixo:
      </Typography>
      <Box
        sx={{
          width: { xs: 200, md: '50%' },
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(/assets/images/lazertur/qr_code.svg)`,
          aspectRatio: '1',
        }}
      />
    </Box>
  );
}
