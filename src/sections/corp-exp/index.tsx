import { Box, createTheme, useMediaQuery } from '@mui/material';

import PresentationCard from 'src/components/presentation-card';

export default function CorporateAndExperienceSection() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1100,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        flexDirection: mdUp ? 'row' : 'column',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <PresentationCard
        link="http://lazertur.com.br/corporate"
        company="corporate"
        text="Viagens corporativas para empresas, com o melhor custo benefício, planejamento financeiro e dados de Business Inteligence."
        buttonText="Conheça a LZT Corporate"
      />
      <PresentationCard
        link="https://experience.lazertur.com.br/"
        company="experience"
        text="Serviço de viagens premium para quem procura uma experiência única. A Lazertur Experience serve a quem procura um atendimento especial."
        buttonText="Conheça a Lazertur Experience"
      />
    </Box>
  );
}
