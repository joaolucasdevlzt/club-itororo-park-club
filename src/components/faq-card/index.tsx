import { Box, Typography } from '@mui/material';

export default function FAQCard() {
  return (
    <Box
      sx={{
        width: '100%',
        p: 5,
        display: 'flex',
        flexDirection: 'column',
        border: 1,
        borderColor: '#E5E6EE',
        borderRadius: 3,
        backgroundColor: 'white',
        gap: 3,
      }}
    >
      <Typography sx={{ fontFamily: 'Prompt-SemiBold', fontSize: 22, color: '#28327F' }}>
        Como funciona a Lazertur Viagens?
      </Typography>
      <Typography sx={{ fontFamily: 'kanit-Light', fontSize: 16, color: '#28327F' }}>
        Somos um serviço de turismo pensado para facilitar sua viagem. Nossos atendentes terão em
        mãos os melhores preços de passagens e hospedagens para te atender, assim como estarão à
        disposição para te auxiliar em qualquer dúvida, mudanças em seu roteiro ou problemas que
        venha a ter durante a viagem.
      </Typography>
    </Box>
  );
}
