import { Box, AppBar, Toolbar, Container } from '@mui/material';

import Logo from 'src/components/logo';

export default function Header() {
  return (
    <AppBar>
      <Toolbar
        sx={{
          boxShadow: '0px 0px 15px 1px #fdfdfd',
          height: 80,
          backgroundColor: 'white',
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Logo sx={{ height: 50, width: 150 }} />

          {/* Botão de Fale com um Consultor */}
          <Box
            sx={{
              border: '1.5px solid #28327F',
              pl: 2,
              pr: 2,
              pt: 1.5,
              pb: 1.5,
              borderRadius: 5,
              fontSize: '1rem',
              fontFamily: 'Kanit-Regular',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: (t) => t.palette.secondary.main,
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'none',
                color: '#E33149',
              },
            }}
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send/?phone=553432285626&text=Ol%C3%A1%2C+tenho+interesse+nessa+oferta+exclusiva%21&type=phone_number&app_absent=0',
                '_blank'
              )
            }
          >
            <Box component="img" src="/assets/icons/lazertur/headset.svg" alt="Fale com um consultor" />
            Fale com um consultor
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
