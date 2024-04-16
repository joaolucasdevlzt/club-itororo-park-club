import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link, createTheme, useMediaQuery } from '@mui/material';

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
  const services = path === encodeURI('/serviços');
  const help = path === encodeURI('/ajuda');
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
          <Logo sx={{ height: 50, width: 150 }} />

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop data={navConfig} />}

          {mdUp && (
            <Stack
              marginTop={2}
              alignItems="center"
              justifyContent="center"
              direction="row"
              gap={3}
            >
              <Link
                sx={{
                  position: 'relative',
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
                  <Home fill={home} />
                  Home
                </Box>
                {home && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -12,
                      width: '120%',
                      border: 2,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    }}
                  />
                )}
              </Link>
              <Link
                sx={{
                  position: 'relative',
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
                  ...(services ? { color: '#E33149' } : {}),
                  '&:hover': {
                    textDecoration: 'none',
                    color: '#E33149',
                  },
                }}
                href="/serviços"
              >
                <Box sx={{ marginRight: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Plus fill={services} />
                  Serviços
                </Box>
                {services && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -12,
                      width: '120%',
                      border: 2,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    }}
                  />
                )}
              </Link>
              <Link
                sx={{
                  position: 'relative',
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
                  ...(about ? { color: '#E33149' } : {}),
                  '&:hover': {
                    textDecoration: 'none',
                    color: '#E33149',
                  },
                }}
                href="/sobre"
              >
                <Box sx={{ marginRight: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Info fill={about} />
                  Sobre nós
                </Box>
                {about && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -12,
                      marginLeft: -2,
                      width: '120%',
                      border: 2,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    }}
                  />
                )}
              </Link>
              <Link
                sx={{
                  position: 'relative',
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
                  ...(help ? { color: '#E33149' } : {}),
                  '&:hover': {
                    textDecoration: 'none',
                    color: '#E33149',
                  },
                }}
                href="/ajuda"
              >
                <Box sx={{ marginRight: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Help fill={help} />
                  Ajuda
                </Box>
                {help && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -12,
                      width: '120%',
                      border: 2,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    }}
                  />
                )}
              </Link>
              <Box
                sx={{
                  border: '1.5px solid #28327F',
                  borderBottom: '0px',
                  pl: 2,
                  pr: 2,
                  pt: 1.5,
                  pb: 1.5,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  fontSize: '1rem',
                  fontFamily: 'Kanit-Regular',
                  fontWeight: theme.typography.fontWeightSemiBold,
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

// icons

const Info = ({ fill }: { fill: boolean }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1594_894)">
      <g clipPath="url(#clip1_1594_894)">
        <path
          d="M13.54 7.29004C13.54 7.86621 13.0713 8.33008 12.5 8.33008C11.9287 8.33008 11.46 7.86133 11.46 7.29004C11.46 6.71875 11.9238 6.25 12.5 6.25C13.0762 6.25 13.54 6.71875 13.54 7.29004ZM25 12.5C25 5.60547 19.3945 0 12.5 0C5.61523 0 0 5.61523 0 12.5C0 19.3945 5.60547 25 12.5 25C19.4043 25 25 19.4043 25 12.5ZM23.96 12.5879C23.96 18.8672 18.8672 23.96 12.5879 23.96C6.31348 23.96 1.07422 18.8281 1.04492 12.5537C1.01074 6.19141 6.19141 1.01074 12.5537 1.04004C18.8281 1.06934 23.96 6.31348 23.96 12.5879ZM13.54 11.9775C13.54 11.1182 12.8369 10.415 11.9775 10.415H9.375V11.4551H11.9775C12.2656 11.4551 12.5 11.6895 12.5 11.9775V19.79H13.54V11.9775Z"
          fill={fill ? '#E33149' : '#28327F'}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1594_894">
        <rect width="25" height="25" fill="white" />
      </clipPath>
      <clipPath id="clip1_1594_894">
        <rect width="25" height="25" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Help = ({ fill }: { fill: boolean }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1962_5224)">
      <path
        d="M12.5587 -8.63635e-06C5.62023 -0.0293055 -0.0291834 5.62011 0.000113434 12.5586C0.0294103 19.3994 5.75207 25 12.5929 25C19.4435 25 25.0001 19.4433 25.0001 12.5928C25.0001 5.75194 19.3995 0.0292882 12.5587 -8.63635e-06ZM12.588 23.96C6.31359 23.96 1.07433 18.8281 1.04504 12.5537C1.01086 6.1914 6.19152 1.01073 12.5538 1.04003C18.8282 1.06933 23.9601 6.31347 23.9601 12.583C23.9601 18.8672 18.8673 23.96 12.588 23.96ZM16.6017 8.62304C16.9142 10.3955 16.0695 12.1631 14.5069 13.0273C13.7159 13.4668 13.0177 14.7412 13.0177 15.7666V16.6699H11.9777V15.7666C11.9777 14.3701 12.8859 12.7344 14.004 12.1191C15.1954 11.46 15.8107 10.1611 15.5714 8.80858C15.3517 7.5537 14.3214 6.52831 13.0665 6.3037C12.1241 6.14257 11.2062 6.38183 10.4884 6.98241C9.78039 7.57812 9.37511 8.44726 9.37511 9.37499H8.33507C8.33507 8.13964 8.87707 6.97753 9.82433 6.18163C10.7716 5.38573 12.0167 5.05858 13.2521 5.27343C14.9269 5.5664 16.3087 6.94823 16.6017 8.62304ZM13.5402 19.79C13.5402 20.3662 13.0714 20.8301 12.5001 20.8301C11.9288 20.8301 11.4601 20.3613 11.4601 19.79C11.4601 19.2187 11.9239 18.75 12.5001 18.75C13.0763 18.75 13.5402 19.2187 13.5402 19.79Z"
        fill={fill ? '#E33149' : '#28327F'}
      />
    </g>
    <defs>
      <clipPath id="clip0_1962_5224">
        <rect width="25" height="25" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Home = ({ fill }: { fill: boolean }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5 1.45801L1.875 9.58301V23.6455H2.91667V12.2913V10.1038L12.5 2.91634L22.0833 10.1038V18.0205V23.6455H23.125V9.58301L12.5 1.45801Z"
      fill={fill ? '#E33149' : '#28327F'}
    />
    <path
      d="M9.1665 15.1045V18.8545V23.6462H10.3123V16.2503H14.6873V23.6462H15.8332V18.0212V15.1045H9.1665Z"
      fill={fill ? '#E33149' : '#28327F'}
    />
  </svg>
);
const Plus = ({ fill }: { fill: boolean }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1928_601)">
      <g clipPath="url(#clip1_1928_601)">
        <path
          d="M17.7083 12.5C17.7083 12.7875 17.475 13.0208 17.1875 13.0208H13.0208V17.1875C13.0208 17.475 12.7875 17.7083 12.5 17.7083C12.2125 17.7083 11.9792 17.475 11.9792 17.1875V13.0208H7.8125C7.525 13.0208 7.29167 12.7875 7.29167 12.5C7.29167 12.2125 7.525 11.9792 7.8125 11.9792H11.9792V7.8125C11.9792 7.525 12.2125 7.29167 12.5 7.29167C12.7875 7.29167 13.0208 7.525 13.0208 7.8125V11.9792H17.1875C17.475 11.9792 17.7083 12.2125 17.7083 12.5ZM25 4.6875V20.3125C25 22.8969 22.8969 25 20.3125 25H4.6875C2.10312 25 0 22.8969 0 20.3125V4.6875C0 2.10312 2.10312 0 4.6875 0H20.3125C22.8969 0 25 2.10312 25 4.6875ZM23.9583 4.6875C23.9583 2.67708 22.3229 1.04167 20.3125 1.04167H4.6875C2.67708 1.04167 1.04167 2.67708 1.04167 4.6875V20.3125C1.04167 22.3229 2.67708 23.9583 4.6875 23.9583H20.3125C22.3229 23.9583 23.9583 22.3229 23.9583 20.3125V4.6875Z"
          fill={fill ? '#E33149' : '#28327F'}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1928_601">
        <rect width="25" height="25" fill="white" />
      </clipPath>
      <clipPath id="clip1_1928_601">
        <rect width="25" height="25" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
