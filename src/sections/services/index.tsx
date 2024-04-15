import { Grid } from '@mui/material';

import Card from './card';

export default function OtherServicesSection() {
  return (
    <Grid
      container
      sx={{ display: 'flex', justifyContent: 'space-between', gap: { xs: 3, md: 3 } }}
    >
      <Grid item sm={5.7} md={5.8}>
        <Card
          title="Transfers"
          text="Saia do aeroporto direto para seu hotel ou resort. Este serviço é ideal para viajantes indo para destinos que ainda não conhecem, passageiros com necessidades especiais, ou caso você apenas queira viajar com a maior comodidade possível."
        />
      </Grid>
      <Grid item sm={5.7} md={5.8}>
        <Card
          title="Aluguel de carros"
          text="Selecione o modelo que melhor atende às suas necessidades, desde carros econômicos, de luxo ou esportivos, e viaje com liberdade. Nosso serviço de aluguel de carros está disponível no Brasil e também em vários destinos internacionais."
        />
      </Grid>
      <Grid item sm={5.7} md={5.8}>
        <Card
          title="Ingressos"
          text="Compre sua viagem já com seu ingresso inserido no pacote. Tickets para parques, eventos e passeios, tudo incluso e com economia para você entrar nos mais diversos lugares."
        />
      </Grid>
      <Grid item sm={5.7} md={5.8}>
        <Card
          title="Passeios"
          text="Faça passeios turísticos em seu destino, com um roteiro planejado e guias locais. Descubra as histórias do lugar que você vai visitar e que vão acrescentar à sua experiência."
        />
      </Grid>
    </Grid>
  );
}
