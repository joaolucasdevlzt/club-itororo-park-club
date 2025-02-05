import { Box, Grid, useTheme, Typography, useMediaQuery } from '@mui/material';

export default function AboutUsSection() {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 30, sm: 40 },
              fontFamily: 'Prompt-Medium',
              fontWeight: '600',
              color: (t) => t.palette.secondary.main,
            }}
          >
            Sobre o Itororó Park Club
          </Typography>
          {downMd && (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: '50%',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(/logo/logo_itororo.svg)`,
                  aspectRatio: '16/7',
                }}
              />
            </Box>
          )}
          <Typography
            sx={{
              fontFamily: 'Kanit-Regular',
              fontSize: 20,
              textAlign: 'left',
              color: (t) => t.palette.secondary.main,
            }}
          >
            O Itororó Park Club é um destino de lazer e entretenimento que proporciona experiências inesquecíveis para toda a família. Com uma infraestrutura moderna e atrações para todas as idades, somos o local ideal para momentos de diversão, descanso e conexão com a natureza.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Kanit-Regular',
              fontSize: 20,
              textAlign: 'left',
              color: (t) => t.palette.secondary.main,
            }}
          >
            Nosso objetivo é encantar nossos clientes, servir com excelência e proporcionar
            experiências incríveis aos nossos sócios.
          </Typography>
     
        </Box>
      </Grid>
      <Grid item xs={0} md={6} display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            width: '70%',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(/logo/logo_itororo.svg)`,
            aspectRatio: '16/7',
          }}
        />
      </Grid>
    </Grid>
  );
}
