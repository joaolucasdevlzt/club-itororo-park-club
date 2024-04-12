import { Dispatch, SetStateAction, useState } from 'react';

import {
  Box,
  Button,
  useTheme,
  Accordion,
  Typography,
  useMediaQuery,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import SectionWrapper from 'src/components/section-wrapper';

import Menu from './menu';
import Answer from './answer';
import { faqData } from './data';

const chevronRight = 'assets/icons/lazertur/ic_chevron_right.svg';
const topics = [
  ['Bagagem', 'Check-in'],
  ['Cancelamentos', 'Reembolsos'],
  ['Viagem com crianças', 'Viagem com pets'],
  ['Seguros', 'Aluguel de carros'],
];
const topicsContent = [
  [faqData.bagagem, faqData.checkin],
  [faqData.cancelamentos, faqData.reembolsos],
  [faqData.crianças, faqData.pets],
  [faqData.seguros, faqData.carros],
];
interface IFaqDisplay {
  chosenTopics: 0 | 1 | 2 | 3 | number;
  onDismiss: Dispatch<SetStateAction<boolean>>;
}
export default function FaqDisplay({ chosenTopics, onDismiss }: IFaqDisplay) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setTab] = useState(true);
  const content = activeTab ? topicsContent[chosenTopics][0] : topicsContent[chosenTopics][1];
  const [expanded, setExpanded] = useState<string | false>('panel10');
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Box
        sx={{
          pt: 2,
          maxWidth: 1350,
          width: '100%',
          height: 'auto',
        }}
      >
        <Button
          sx={{
            alignSelf: 'flex-start',
            display: 'flex',
            gap: 1,
            fontFamily: 'Prompt-SemiBold',
            color: '#28327F',
          }}
          onClick={() => onDismiss((state) => !state)}
        >
          <Box
            sx={{
              width: 15,
              aspectRatio: '1',
              backgroundImage: `url(${chevronRight})`,
              backgroundSize: '100%',
              transition: '.5s all',
              transform: 'rotate(180deg)',
            }}
          />
          Voltar para ajuda
        </Button>
      </Box>
      <SectionWrapper>
        <Box sx={{ display: 'flex', gap: 3, ...(isMobile ? { flexDirection: 'column' } : {}) }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              minWidth: 180,
            }}
          >
            <Menu tabNames={topics[chosenTopics]} setOpen={setTab} activeTab={activeTab} />
          </Box>

          <Box>
            {content.map((item, index) => (
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                disableGutters
                key={item.question}
                sx={{
                  borderBottom: `1px solid #28327F`,
                  backgroundColor: '#F9FAFA',
                  '&.Mui-expanded': {
                    boxShadow: 'none',
                  },
                }}
              >
                <AccordionSummary
                  sx={{
                    backgroundColor: '#F9FAFA',
                  }}
                  expandIcon={
                    <Box
                      sx={{
                        width: 20,
                        aspectRatio: '1',
                        backgroundImage: `url(${chevronRight})`,
                        backgroundSize: '100%',
                        transition: '.5s all',
                        transform: 'rotate(270deg)',
                      }}
                    />
                  }
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: 'Prompt-Regular',
                      ...(expanded === `panel${index}` && { fontWeight: 'bold' }),
                      color: (t) => t.palette.secondary.main,
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#F9FAFA' }}>
                  <Answer singleAnswer={item.answer} />
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </SectionWrapper>
    </>
  );
}
