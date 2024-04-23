import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#192033',
        display: 'flex',
        flexDirection: 'column',
        gap:5,
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 5, xl: 15 },
      
      }}
    >
      <Box
        sx={{
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          width: 170,
          height: 70,
          backgroundPosition: 'center',
          backgroundImage: 'url(/logo/corporate_logo.svg)',
        }}
      />
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: {xs:12,md:14},
          fontFamily: 'Kanit-Light',
          color: 'white',
        }}
      >
        LAZERTUR TURISMO LTDA | 38.575.072/0001-30 | AV RONDON PACHECO 1756 CEP 38408343- UBERLÂNDIA
        - MINAS GERAIS - BRASIL | LAZERTUR VIAGENS. Para mais informações sobre reembolsos,
        devoluções, cancelamentos, SAC e demais questões relacionadas ao pagamento entrar em contato
        conosco.
      </Typography>
    </Box>
  );
}
