import { Box } from '@mui/material';

import Benchmarking from './sections/benchmarking';
import CardsSection from './sections/cards-section';
import HistorySection from './sections/history-section';
import OurSolutionsSection from './sections/our-solutions-section';
import PartnershipSection from './sections/partnership-section';

export default function CorporatePage() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: { xs: '16/9.3', sm: '16/7.3' },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: { xs: 'bottom', lg: 'center' },
          backgroundSize: { xs: '160%', sm: '130%' },
          backgroundImage: 'url(/assets/images/corporate/corporate_hero.png)',
        }}
      />
      <CardsSection
        direction="row"
        image="/assets/images/corporate/travel_section_1.png"
        title="Viagens corporativas com o menor custo de mercado"
        text="Nossa consultoria irá filtrar as melhores ofertas e fazer o planejamento mais eficaz para agendar as viagens da sua empresa. Você terá melhor controle dos gastos e maior segurança em caso de imprevistos."
      />
      <CardsSection
        direction="row-reverse"
        image="/assets/images/corporate/travel_section_2.png"
        title="Com ferramentas de gestão e Business Inteligente"
        text="Sabemos quais as melhores épocas para comprar e onde comprar, pensando no destino que você deseja. Você terá uma gestão maior de suas viagens e dados que comprovam essa melhoria."
      />
      <HistorySection />
      <OurSolutionsSection />
      <Benchmarking />
      <PartnershipSection />
    </Box>
  );
}
