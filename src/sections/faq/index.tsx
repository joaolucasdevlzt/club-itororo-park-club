import { useRef, useState } from 'react';

import { Box, Grid, useTheme, Typography, useMediaQuery } from '@mui/material';

import FAQCard from 'src/components/faq-card';
import StyledButton from 'src/components/button';

import { questions } from './questions';

export default function FAQ() {
  const scrollable = useRef<HTMLElement | null>(null);
  const [scroll, setScroll] = useState(0);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  function handleScroll() {
    const elementScroll = scrollable?.current?.scrollLeft || 0;
    const size = (scrollable?.current?.scrollWidth || 350) + 10;
    const cards = size / 4; // número de perguntas
    setScroll(Math.round(elementScroll / (0.9 * cards)));
  }
  if (smDown) {
    return (
      <Box>
        <Box
          onScroll={() => handleScroll()}
          ref={scrollable}
          id="typo"
          sx={{
            overflowX: 'auto',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: '12px',
              height: '0px',
            },

            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Grid item sm={5.8} lg={2.9} key={questions[0].title}>
            <Box sx={{ height: '100%', width: window.screen.width - 50 }}>
              <FAQCard sx={{}} title={questions[0].title} text={questions[0].text} />
            </Box>
          </Grid>
          <Grid item sm={5.8} lg={2.9} key={questions[1].title}>
            <Box sx={{ height: '100%', width: window.screen.width - 50 }}>
              <FAQCard sx={{}} title={questions[1].title} text={questions[1].text} />
            </Box>
          </Grid>
          <Grid item sm={5.8} lg={2.9} key={questions[2].title}>
            <Box sx={{ height: '100%', width: window.screen.width - 50 }}>
              <FAQCard sx={{}} title={questions[2].title} text={questions[2].text} />
            </Box>
          </Grid>
          <Grid item sm={5.8} lg={2.9} key={questions[3].title}>
            <Box sx={{ height: '100%', width: window.screen.width - 50 }}>
              <FAQCard sx={{}} title={questions[3].title} text={questions[3].text} link />
            </Box>
          </Grid>
        </Box>
        <Box
          sx={{ width: '100%', marginTop: 3, display: 'flex', gap: 2, justifyContent: 'center' }}
        >
          <Box
            sx={{
              border: 3,
              borderColor: (t) => t.palette.secondary.main,
              width: 30,
              opacity: scroll === 0 ? 1 : 0.5,
            }}
          />
          <Box
            sx={{
              border: 3,
              borderColor: (t) => t.palette.secondary.main,
              width: 30,
              opacity: scroll === 1 ? 1 : 0.5,
            }}
          />
          <Box
            sx={{
              border: 3,
              borderColor: (t) => t.palette.secondary.main,
              width: 30,
              opacity: scroll === 2 ? 1 : 0.5,
            }}
          />
          <Box
            sx={{
              border: 3,
              borderColor: (t) => t.palette.secondary.main,
              width: 30,
              opacity: scroll >= 3 ? 1 : 0.5,
            }}
          />
        </Box>
        <Box
          sx={{
            paddingTop: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Prompt-SemiBold',
              fontSize: 22,
              textAlign: 'center',
              marginBottom: 5,
              color: (t) => t.palette.secondary.main,
            }}
          >
            Sua resposta não foi encontrada acima?
          </Typography>
          <StyledButton sx={{ width: '90%' }} text="Entre em contato conosco" callback={() => ''} />
        </Box>
      </Box>
    );
  }
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: { sm: 2, lg: 0 },
      }}
    >
      {questions.map((question) => (
        <Grid key={question.title} item sm={5.8} lg={2.9}>
          <FAQCard title={question.title} text={question.text} />
        </Grid>
      ))}
      <Grid
        container
        item
        xs={12}
        sx={{
          display: 'flex',

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} md={12} paddingTop={5} display="flex" justifyContent="center">
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: 'Prompt-SemiBold',
              fontSize: 26,
              color: (t) => t.palette.secondary.main,
            }}
          >
            Sua resposta não foi encontrada acima?
          </Typography>
        </Grid>
        <Grid item xs={12} md={3.7} paddingTop={5}>
          <StyledButton text="Entre em contato conosco" callback={() => ''} />
        </Grid>
      </Grid>
    </Grid>
  );
}
