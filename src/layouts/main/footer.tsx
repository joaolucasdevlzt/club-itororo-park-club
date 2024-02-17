import { Link } from 'react-router-dom';

import { Box, Grid, Typography } from '@mui/material';

import SectionWrapper from 'src/components/section-wrapper';

const centerContent = {};

export default function Footer() {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#F9FAFA', pt: 12 }}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#E5E6EE',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          pb: 12,
        }}
      >
        <SectionWrapper>
          <Grid
            container
            sx={{
              width: '100%',
              height: 'auto',
            }}
          >
            <Grid container item xs={12} mb={12} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Box width={180} component="img" src="/logo/lazertur_viagens_logo.svg" />
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={3}
              sx={{ display: 'flex', flexDirection: 'column', gap: 3, pb: { xs: 12, sm: 6 } }}
            >
              <Grid item>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: 'Kanit-SemiBold',
                      color: '#28327F',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Passagens
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/sobre" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: 'Kanit-SemiBold',
                      color: '#28327F',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Pacotes
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: 'Kanit-SemiBold',
                      color: '#28327F',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Hospedagem
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: 'Kanit-SemiBold',
                      color: '#28327F',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Sobre nós
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={3}
              sx={{ display: 'flex', flexDirection: 'column', gap: 1, pb: { xs: 12, sm: 6 } }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: 'Kanit-SemiBold',
                    color: '#28327F',
                  }}
                >
                  Contato
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', gap: 2 }}>
                <Box component="img" src="/assets/icons/lazertur/whatsapp.svg" />
                <Typography sx={{ fontFamily: 'Kanit-Regular', color: '#28327F' }}>
                  (34) 3237.2515
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', gap: 2, pr: { xs: 2, lg: 4 } }}>
                <Box component="img" src="/assets/icons/lazertur/location.svg" />
                <Typography sx={{ fontFamily: 'Kanit-Regular', color: '#28327F' }}>
                  Av. Rondon Pacheco, 1756 Uberlândia, MG
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', gap: 2 }}>
                <Box component="img" src="/assets/icons/lazertur/help.svg" />
                <Typography sx={{ fontFamily: 'Kanit-Regular', color: '#28327F' }}>
                  Ajuda
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={3}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: 'Kanit-SemiBold',
                    color: '#28327F',
                  }}
                >
                  Câmbio do dia
                </Typography>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: 'Kanit-Regular',
                    color: '#28327F',
                  }}
                >
                  {new Date().toLocaleDateString()}
                </Typography>
              </Grid>

              <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item sx={{ display: 'flex', gap: 1 }}>
                  <Typography sx={{ fontFamily: 'Kanit-SemiBold', color: '#28327F' }}>
                    Dólar
                  </Typography>
                  <Typography sx={{ fontFamily: 'Kanit-Regular', color: '#28327F' }}>
                    (USD): R$5.06
                  </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', gap: 1 }}>
                  <Typography sx={{ fontFamily: 'Kanit-SemiBold', color: '#28327F' }}>
                    Euro
                  </Typography>
                  <Typography sx={{ fontFamily: 'Kanit-Regular', color: '#28327F' }}>
                    (EUR): R$5.54
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} mt={12} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Grid item xs={1.5}>
                <Box component="img" src="/assets/icons/lazertur/instagram.svg" />
              </Grid>
              <Grid item xs={1.5}>
                <Box component="img" src="/assets/icons/lazertur/facebook.svg" />
              </Grid>
              <Grid item xs={1.5}>
                <Box component="img" src="/assets/icons/lazertur/linkedin.svg" />
              </Grid>
            </Grid>
            <Grid container item xs={4} md={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Grid
                item
                md={12}
                sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}
              >
                <Box width={180} component="img" src="/logo/lazertur_viagens_logo.svg" />
              </Grid>
              <Grid
                container
                item
                md={12}
                sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}
              >
                <Grid
                  item
                  xs={1}
                  sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}
                >
                  <Box component="img" src="/assets/icons/lazertur/instagram.svg" />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}
                >
                  <Box component="img" src="/assets/icons/lazertur/facebook.svg" />
                </Grid>
                <Grid
                  item
                  xs={1}
                  sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}
                >
                  <Box component="img" src="/assets/icons/lazertur/linkedin.svg" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: { xs: 12, md: 0 } }}>
              <Typography sx={{ fontSize: 12, fontFamily: 'Kanit-Regular', color: '#28327F' }}>
                LAZERTUR TURISMO LTDA | 38.575.072/0001-30 | AV RONDON PACHECO 1756 CEP 38408343-
                UBERLÂNDIA - MINAS GERAIS - BRASIL | LAZERTUR VIAGENS. Para mais informações sobre
                reembolsos, devoluções, cancelamentos, SAC e demais questões relacionadas ao
                pagamento entrar em contato conosco.
              </Typography>
            </Grid>
          </Grid>
        </SectionWrapper>
      </Box>
    </Box>
  );
}
