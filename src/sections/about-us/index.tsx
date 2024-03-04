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
            Sobre o Grupo LZT
          </Typography>
          {downMd && (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: '50%',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(/logo/logo_grupo_lzt.svg)`,
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
            Um conglomerado de empresas com presença nacional, o Grupo LZT atua há mais de 30 anos
            sendo referência em serviços de viagens e segmentos agregados.
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
            experiências incríveis aos nossos viajantes, e proporcionamos um leque de serviços para
            atender às necessidades de todos os perfis de pessoas que podem precisar de nós.
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Kanit-Regular',
              fontWeight: '700',
              fontSize: 20,
              textAlign: 'left',
              color: (t) => t.palette.secondary.main,
            }}
          >
            Conheça as outras empresas que compõem nosso grupo:
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
            backgroundImage: `url(/logo/logo_grupo_lzt.svg)`,
            aspectRatio: '16/7',
          }}
        />
      </Grid>
    </Grid>
  );
}
