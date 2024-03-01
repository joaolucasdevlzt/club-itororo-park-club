import {
  Box,
  Grid,
  Button,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
} from '@mui/material';

export default function Newsletter() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(/assets/background/lazertur/newsletter.svg)`,
        aspectRatio: '10/6.45',
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          px: { xs: 3, lg: 15 },
          py: { xs: 5, lg: 15 },
          maxWidth: 900,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Prompt-SemiBold',
            fontSize: { xs: 24, sm: 32 },
            textAlign: 'center',
            color: (t) => t.palette.secondary.main,
          }}
        >
          Assine nossa newsletter e fique por dentro das novidades
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Kanit-Light',
            fontSize: { xs: 16, sm: 20 },
            textAlign: 'center',
            color: (t) => t.palette.secondary.main,
          }}
        >
          Inscreva-se agora e receba dicas extraordinárias que vão te ajudar a planejar suas
          próximas viagens.
        </Typography>

        <Grid container gap={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              placeholder="Nome"
              sx={{ borderRadius: 1, width: '100%', backgroundColor: 'white' }}
            />
          </Grid>
          <Grid item xs={12} sm={7.5}>
            <TextField
              placeholder="Email"
              sx={{ borderRadius: 1, width: '100%', backgroundColor: 'white' }}
            />
          </Grid>
        </Grid>
        <FormControlLabel
          sx={{ typography: { fontFamily: 'Kanit-Light', fontSize: { xs: 16, sm: 20 } } }}
          control={<Checkbox />}
          label={
            <Typography
              sx={{
                fontFamily: 'Kanit-Light',
                fontSize: 18,
                color: (t) => t.palette.secondary.main,
              }}
            >
              Ao se inscrever, você concorda em receber nossa newsletter e receber dicas sobre os
              melhores passeios turísticos.
            </Typography>
          }
        />
        <Button
          disabled
          onClick={() => alert('Você enviará!')}
          sx={{
            pl: 5,
            pr: 5,
            borderColor: '#F9FAFA',
            border: 1,
            fontWeight: 'light',
            fontFamily: 'Kanit-Regular',
            fontSize: 20,
            textAlign: 'center',
            color: '#F9FAFA',
            ':disabled': {
              backgroundColor: '#8F99A0',
              color: 'white',
              borderColor: '#8F99A0',
            },
            backgroundColor: '#E33149',
            '&:hover': {
              borderColor: '#E33149',
              border: 1,
              backgroundColor: '#E33149',
              color: '#F9FAFA',
            },
          }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
