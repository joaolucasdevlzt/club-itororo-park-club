import { Box, Grid, Typography } from '@mui/material';

import SectionWrapper from 'src/components/section-wrapper';

export default function Footer() {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#ffff', pt: 12 }}>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#ffff',
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
              <Box
                alt="Logo da Lazertur Viagens"
                width={180}
                component="img"
                src="/logo/lazertur_viagens_logo.svg"
              />
            </Grid>
   
            <Grid
              container
              item
              xs={12}
              md={4}
              sx={{ display: 'flex', flexDirection: 'column', gap: 1, pb: { xs: 12, sm: 6 } }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: 'Kanit-SemiBold',
                    color: (t) => t.palette.secondary.main,
                  }}
                >
                  Contato
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', gap: 2 }}>
                <Box
                  alt="Whatsapp icon"
                  component="img"
                  src="/assets/icons/lazertur/phone.svg"
                />
                <Typography
                  sx={{ fontFamily: 'Kanit-Regular', color: (t) => t.palette.secondary.main }}
                >
                  (34) 3228-5626
                </Typography>
              </Grid>
             
              <Grid item sx={{ display: 'flex', gap: 2, pr: { xs: 2, lg: 4 } }}>
                <Box
                  alt="location icon"
                  component="img"
                  src="/assets/icons/lazertur/location.svg"
                />
                <Typography
                  sx={{ fontFamily: 'Kanit-Regular', color: (t) => t.palette.secondary.main, marginTop: 2 }}
                >
                  Av Lindormira Borges do Nascimento, s/n CEP 38425-270 
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', gap: 2 }}>
                <Box
                  onClick={() => {
                    window.open('https://firebasestorage.googleapis.com/v0/b/ff-prod-platform.appspot.com/o/documents%2FTERMO-DE-COMPRA-E-POLITICA-DE-PRIVACIDADE-ITORORO.pdf?alt=media&token=b8a88f1b-11cf-42cd-a308-54e1c58cda52', 'blank');
                  }}
                  alt="instagram icon"
                  component="img"
                  src="/assets/icons/lazertur/coffee.svg"
                  sx={{
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                />
                 <Typography
                  sx={{ fontFamily: 'Kanit-Regular', color: (t) => t.palette.secondary.main }}
                >
                 Termos de Política e Privacidade
                </Typography>
                 </Grid>
          
            </Grid>
          
            <Grid
              container
              item
              xs={12}
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                justifyContent: { xs: 'center', md: 'center' },
                alignItems: 'center',
                pb: { xs: 12, sm: 6 },
              }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontFamily: 'Kanit-SemiBold',
                    color: (t) => t.palette.secondary.main,
                  }}
                >
                  Siga-nos
                </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', gap: 2 }}>
                <Box
                  onClick={() => {
                    window.open('https://www.instagram.com/itororoparkclub/', 'blank');
                  }}
                  alt="instagram icon"
                  component="img"
                  src="/assets/icons/lazertur/instagram.svg"
                  sx={{
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                />
                <Box
                  onClick={() => {
                    window.open('https://www.facebook.com/clubecacaepescauberlandia', 'blank');
                  }}
                  alt="Facebook icon"
                  component="img"
                  src="/assets/icons/lazertur/facebook.svg"
                  sx={{
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                />
              
              </Grid>
            </Grid>
            
            <Grid container item xs={12} md={4} justifyContent="flex-end">
              <Box
                alt="Lazertur Viagens logo"
                width={180}
                component="img"
                src="/logo/lazertur_viagens_logo.svg"
                sx={{ display: { xs: 'none', md: 'block' } }}
              />
            </Grid>
          </Grid>
        </SectionWrapper>
      </Box>
    </Box>
  );
}