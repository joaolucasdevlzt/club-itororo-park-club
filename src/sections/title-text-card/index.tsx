import { Grid, Typography } from '@mui/material';

import FAQCard from 'src/components/faq-card';

import { questions } from './questions';

export default function TitleTextCard() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '40px',
      }}
    >
      <Grid item xs={12} pb={5}>
        <Typography
          sx={{
            fontSize: { xs: 30, sm: 40 },
            fontFamily: 'Prompt-Medium',
            fontWeight: '600',
            color: (t) => t.palette.secondary.main,
          }}
        >
          Outros serviços para a sua viagem
        </Typography>
      </Grid>
      {questions.map((question) => (
        <Grid key={question.title} item sm={5.8}>
          <FAQCard title={question.title} text={question.text} />
        </Grid>
      ))}
    </Grid>
  );
}
