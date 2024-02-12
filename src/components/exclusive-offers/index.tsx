import { Box, Button, Typography } from '@mui/material';

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
        padding: 3,
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
        sx={{ fontFamily: 'Kanit-Thin', fontSize: 20, textAlign: 'center', color: 'white' }}
      >
        Participe do nosso grupo VIP no WhatsApp e seja o primeiro a saber das melhores ofertas.
      </Typography>
      <Button
        onClick={() => alert('Você será redirecionado!')}
        sx={{
          width: '100%',
          borderColor: '#F9FAFA',
          border: 1,
          fontFamily: 'Kanit-Thin',
          fontSize: 20,
          textAlign: 'center',
          color: '#E33149',
          backgroundColor: '#F9FAFA',
          '&:hover': {
            borderColor: '#E33149',
            border: 1,
            backgroundColor: '#E33149',
            color: '#F9FAFA',
          },
        }}
      >
        Clique aqui para participar
      </Button>
      <Typography
        sx={{
          fontWeight: 300,
          fontFamily: 'Kanit-Thin',
          fontSize: 20,
          textAlign: 'center',
          color: 'white',
        }}
      >
        Ou leia o QR code abaixo:
      </Typography>
      <Box
        sx={{
          width: '50%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(/assets/images/lazertur/qr_code.svg)`,
          aspectRatio: '1',
        }}
      />
    </Box>
  );
}
