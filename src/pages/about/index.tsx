import { Helmet } from 'react-helmet-async';

import { Box, Typography } from '@mui/material';

import Banner from 'src/components/banner';
import TitleAndTexts from 'src/components/title-and-text';
import SectionWrapper from 'src/components/section-wrapper';

import TimelineSection from 'src/sections/timeline';


export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Lazertur</title>
      </Helmet>
      <Banner images="/assets/images/lazertur/about/about_banner.svg" />
      <SectionWrapper>
        <TitleAndTexts
          title="Quem somos"
          texts={[
            `A Lazertur Viagens integra o Grupo LZT, um ecossistema dedicado ao setor do turismo e        viagens, acumulando mais de três décadas de experiência no ramo. Nosso propósito vai além de proporcionar viagens; buscamos transformar cada experiência em um conjunto de memórias únicas e inesquecíveis.`,
            `A qualidade de nossos serviços é um pilar fundamental da nossa cultura, onde nos dedicamos
            incansavelmente à excelência, sempre em busca de superar as expectativas de nossos clientes.
            Sabemos que a conexão estabelecida entre nós e cada viajante, é a essência que nos
            impulsiona. Cada viagem é um sonho único, merecendo ser atendido com toda a atenção
            necessária. Por isso, caminhamos com cada cliente que confia em nosso trabalho.`,
            `Abraçamos a inovação, a eficiência e a busca por resultados excepcionais. Somos movidos pela
            paixão e pela excelência, contando com uma equipe dedicada e apaixonada pelo universo de
            viagens e pelo processo de tornar sonhos em realidade.`,
          ]}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography
            sx={{
              fontSize: '26px',
              lineHeight: 1.3,
              fontFamily: 'Prompt-SemiBold',
              color: (t) => t.palette.secondary.main,
            }}
          >
            Nossa história
          </Typography>
          <TimelineSection />
        </Box>
      </SectionWrapper>
    </>
  );
}
