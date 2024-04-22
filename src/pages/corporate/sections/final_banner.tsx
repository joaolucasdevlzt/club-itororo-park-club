import { Box, Button, Typography } from '@mui/material';

export default function FinalBanner() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        mt: { xs: 10, sm: 15 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          backdropFilter: '',
          backgroundImage: 'url(/assets/images/corporate/final_banner.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: { xs: 'brightness(60%)', md: 'brightness(90%)' },
          backgroundSize: { xs: 'cover', md: '100%' },
          aspectRatio: { xs: '10/7.2', sm: '10/6', md: '10/3.8' },
        }}
      />
      <Box
        sx={{
          pl: { xs: 2, sm: 5, xl: 15 },
          pr: { xs: 2, sm: 5, xl: 15 },
          position: 'absolute',
          top: { xs: 15, sm: 15 },
          left: { xs: 10, sm: 15 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          justifyContent: 'center',
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
          Fale com nossos especialistas e faça sua empresa decolar
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '22px' },
            lineHeight: { xs: '16px', sm: '26px', md: '32px', lg: '35px' },
            fontFamily: 'Kanit-ExtraLight',
          }}
        >
          A LZT Corporate está pronta para te auxiliar no seu planejamento de viagens e encontrar as
          melhores soluções para seu negócio. Economize, planeje-se e voe tranquilo sabendo que você
          escolheu a melhor opção para sua viagem corporativa.
        </Typography>
        <Button
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
