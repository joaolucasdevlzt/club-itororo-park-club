import { Box, Typography } from '@mui/material';

import StyledButton from 'src/components/button';

export default function DestinationDescription() {
  return (
    <Box sx={{ mt: { xs: 5, lg: 0 }, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pr: 5 }}>
        <Typography
          variant="h2"
          sx={{
            padding: 0,
            display: { xs: 'none', lg: 'block' },
            fontFamily: 'Prompt-Regular',
            color: (t) => t.palette.secondary.main,
          }}
        >
          Rio de Janeiro
        </Typography>
        <Typography
          sx={{
            lineBreak: 'strict',
            fontFamily: 'Kanit-Light',
            color: (t) => t.palette.secondary.main,
          }}
        >
          Carinhosamente conhecido como &quot;Cidade Maravilhosa&quot;, é um destino que combina
          calor humano, paisagens deslumbrantes e praias ensolaradas.
        </Typography>
        <Typography
          sx={{
            lineBreak: 'strict',
            fontFamily: 'Kanit-Light',
            color: (t) => t.palette.secondary.main,
          }}
        >
          O Centro Histórico do Rio de Janeiro oferece uma verdadeira viagem aos séculos passados.
          Um dos pontos de destaque é o Theatro Municipal, monumento de 1909, inspirado na Ópera de
          Paris, que combina beleza clássica e elegante, convidando os visitantes a contemplar cada
          canto do lugar.
        </Typography>
        <Typography
          sx={{
            lineBreak: 'strict',
            fontFamily: 'Kanit-Light',
            color: (t) => t.palette.secondary.main,
          }}
        >
          E é claro, não dá para falar do Rio de Janeiro sem mencionar suas praias. Copacabana,
          talvez uma das praias mais famosas do mundo, é reconhecida pelo seu icônico calçadão preto
          e branco. É o local perfeito para praticar vôlei de praia, fazer caminhadas ao entardecer
          e desfrutar dos quiosques à beira-mar. Já Ipanema, imortalizada na música &quot;Garota de
          Ipanema&quot;, reflete a essência da beleza e leveza carioca. Com uma atmosfera
          descontraída, os visitantes se encantam com as belezas naturais da praia.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <StyledButton
          sx={{ width: 'fit-content', maxWidth: 500, pl: 5, pr: 5 }}
          text="Planeje sua viagem agora mesmo"
          callback={() => console.log('Planeje sua viagem agora mesmo')}
        />
      </Box>
    </Box>
  );
}
