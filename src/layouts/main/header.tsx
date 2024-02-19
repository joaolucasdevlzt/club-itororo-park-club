import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link, Typography, createTheme, useMediaQuery } from '@mui/material';

import { usePathname } from 'src/routes/hooks';

import { useOffSetTop } from 'src/hooks/use-off-set-top';

import Logo from 'src/components/logo';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';

// ----------------------------------------------------------------------

export default function Header() {
  const path = usePathname();
  const about = path === '/sobre';
  const home = path === '/';
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 940,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          boxShadow: '0px 0px 15px 1px #E5E6EE',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP_OFFSET,
          },
          backgroundColor: 'white',
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo sx={{ height: 30 }} />

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop data={navConfig} />}

          {mdUp && (
            <Stack alignItems="flex-start" justifyContent="center" direction="row" gap={4}>
              <Link
                sx={{
                  width: 'fit-content',
                  fontSize: '1rem',
                  fontFamily: 'Kanit-Regular',
                  fontWeight: theme.typography.fontWeightSemiBold,
                  marginRight: 1,
                  flexDirection: 'column',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: (t) => t.palette.secondary.main,
                  ...(home ? { color: '#E33149' } : {}),
                  '&:hover': {
                    textDecoration: 'none',
                    color: '#E33149',
                  },
                }}
                href="/"
              >
                <Box sx={{ marginRight: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  Home
                </Box>
                {home && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      width: 90,
                      border: 2,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    }}
                  />
                )}
              </Link>
              <Link
                sx={{
                  fontWeight: theme.typography.fontWeightSemiBold,
                  marginRight: 1,
                  display: 'flex',
                  color: (t) => t.palette.secondary.main,
                  alignItems: 'flex-start',
                  gap: 1,
                  ...(about ? { color: '#E33149' } : {}),
                  '&:hover': {
                    textDecoration: 'none',
                    color: '#E33149',
                  },
                }}
                href="/sobre"
              >
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontFamily: 'Kanit-Regular',
                  }}
                >
                  {' '}
                  Sobre nós
                </Typography>
                {about && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      width: 110,
                      border: 2,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    }}
                  />
                )}
              </Link>
              <Box
                sx={{
                  fontSize: '1rem',
                  fontFamily: 'Kanit-Regular',
                  fontWeight: theme.typography.fontWeightSemiBold,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2.5,
                  color: (t) => t.palette.secondary.main,
                }}
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send/?phone=553432556831&text=Ol%C3%A1%2C+tenho+interesse+nessa+oferta+exclusiva%21&type=phone_number&app_absent=0',
                    '_blank'
                  )
                }
              >
                <Box component="img" src="/assets/icons/lazertur/headset.svg" />
                Fale com um consultor
              </Box>
            </Stack>
          )}
          {!mdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
