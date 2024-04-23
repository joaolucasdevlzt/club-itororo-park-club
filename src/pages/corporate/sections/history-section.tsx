import { Box, Button, Typography } from '@mui/material';

export default function HistorySection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        maxWidth: '1520px',
        justifyContent: 'flex-end',
        mt: { xs: 10, sm: 15 },
        pl: { xs: 2, sm: 5, xl: 15 },
        pr: { xs: 2, sm: 5, xl: 15 },
      }}
    >
      <Box
        sx={{
          borderRadius: 3,
          overflow: 'clip',
          padding: { xs: 3, md: 3, lg: 8 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'flex-end',
          width: '100%',
          backdropFilter: '',
          backgroundImage: 'url(/assets/images/corporate/history-section.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: {xs:'brightness(75%)',md:'brightness(100%)'},
          backgroundSize: { xs: 'cover', md: '100%' },
          aspectRatio: { xs: '10/7.5', sm: '10/6', md: '10/4.55' },
        }}
      />
      <Box
        sx={{
          pl: { xs: 2, sm: 5, xl: 11 },
          pr: { xs: 2, sm: 5, xl: 11 },
          pb: { xs: 2, sm: 5, xl: 5 },
          position: 'absolute',
          top: { xs: 10, sm: 15 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          width: { xs: '75%', sm: '70%', md: '50%' },
          height: '100%',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: '16px', sm: '20px', md: '26px', lg: '38px', xl: '46px' },
            fontFamily: 'Kanit-Regular',
          }}
        >
          Mais de 30 anos de atuação no mercado de viagens
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '22px' },
            lineHeight: { xs: '16px', sm: '26px', md: '32px', lg: '35px' },
            fontFamily: 'Kanit-ExtraLight',
          }}
        >
          Fundada em 1990 e com sede em Uberlândia, a Lazertur Viagens tem atuado no mercado de
          turismo e posteriormente com a vertente do LZT Corporate, especializada no atendimento
          para empresas e oferecendo a mesma qualidade de serviço adquirido em décadas de
          experiência no ramo.
        </Typography>
        <Button
          onClick={() =>
            window.open(
              'https://api.whatsapp.com/send/?phone=5534999482515&type=phone_number&app_absent=0',
              '_blank'
            )
          }
          id="soluções"
          sx={{
            pl: 3,
            pr: 3,
            fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '22px' },
            border: '1px solid white',
            color: 'white',
            fontWeight: 'normal',
            fontFamily: 'Kanit-ExtraLight',
          }}
        >
          Converse com um agente
        </Button>
      </Box>
    </Box>
  );
}
