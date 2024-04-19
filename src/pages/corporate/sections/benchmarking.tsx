import { Box, useTheme, Typography, useMediaQuery } from '@mui/material';

export default function Benchmarking() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1520px',
          mt: { xs: 10, sm: 15 },
          pl: { xs: 2, sm: 5, xl: 15 },
          pr: { xs: 2, sm: 5, xl: 15 },
          gap: 5,
        }}
      >
        <Typography
          sx={{
            color: '#0A35CD',
            fontSize: { xs: '20px', sm: '26px', lg: '38px', xl: '46px' },
            fontFamily: 'Kanit-SemiBold',
          }}
        >
          Quer saber o que nossos clientes pensam sobre a LZT Corporate?
        </Typography>
        <Typography
          sx={{
            color: 'black',
            fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px', xl: '24px' },
            fontFamily: 'Kanit-Regular',
          }}
        >
          Fazemos questão que você comprove a qualidade da nossa entrega com as empresas que já
          atendemos. Portanto, com nosso programa de benchmarking, nós mesmos podemos te auxiliar a
          entrar em contato com nossos clientes. Dessa forma, vocês podem trocar experiências e
          determinar a sua opinião sobre o nosso serviço.
        </Typography>
        <Box
          sx={{
            width: '100%',
            aspectRatio: '1',
            backgroundSize: '100%',
            backgroundImage: 'url(/assets/images/corporate/benchmarking_desktop.png)',
          }}
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1520px',
        alignItems: 'center',
        mt: { xs: 10, sm: 15 },
        pl: { xs: 2, sm: 5, xl: 15 },
        pr: { xs: 2, sm: 5, xl: 15 },
        gap: 5,
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1',
          backgroundSize: '100%',
          backgroundImage: 'url(/assets/images/corporate/benchmarking_desktop.png)',
        }}
      />
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography
          sx={{
            color: '#0A35CD',
            fontSize: { xs: '20px', sm: '26px', lg: '38px', xl: '46px' },
            fontFamily: 'Kanit-SemiBold',
          }}
        >
          Quer saber o que nossos clientes pensam sobre a LZT Corporate?
        </Typography>
        <Typography
          sx={{
            color: 'black',
            fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px', xl: '24px' },
            fontFamily: 'Kanit-Regular',
          }}
        >
          Fazemos questão que você comprove a qualidade da nossa entrega com as empresas que já
          atendemos. Portanto, com nosso programa de benchmarking, nós mesmos podemos te auxiliar a
          entrar em contato com nossos clientes. Dessa forma, vocês podem trocar experiências e
          determinar a sua opinião sobre o nosso serviço.
        </Typography>
      </Box>
    </Box>
  );
}
