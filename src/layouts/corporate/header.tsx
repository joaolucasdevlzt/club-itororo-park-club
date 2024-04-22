import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link, createTheme, useMediaQuery } from '@mui/material';

import NavMobile from './nav/mobile';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';

// ----------------------------------------------------------------------

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
  return (
    <Box
      sx={{
        zIndex: 1000,
        width: '100%',
        position: { md: 'relative', lg: 'fixed' },
        top: 0,
        pl: { xs: 3, sm: 10, md: 15, lg: 20, xl: 30 },
        pr: { xs: 3, sm: 10, md: 15, lg: 20, xl: 30 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: {
          xs: HEADER.H_MOBILE,
          md: '120px',
        },
        backgroundColor: '#192033',
        opacity: { xs: 1, lg: 0.8 + scrollPosition * 0.0004 },
      }}
    >
      <Box
        sx={{
          width: { xs: '100px', md: '158px' },
          height: { xs: '30px', md: '56px' },
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(/logo/corporate_logo.svg)',
        }}
      />

      {mdUp && (
        <Stack
          sx={{
            gap: { xs: 1, lg: 2 },
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            sx={{
              pl: { xs: 1, lg: 3 },
              pr: { xs: 1, lg: 3 },
              pt: 1,
              pb: 1,
              width: 'fit-content',
              fontFamily: 'Kanit-ExtraLight',
              color: 'white',
              '&:hover': {
                backgroundColor: '#0A35CD80',
                borderRadius: '6px',
                textDecoration: 'none',
              },
            }}
            href="/corporate/#sobre-nós"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>Sobre nós</Box>
          </Link>
          <Link
            sx={{
              pl: { xs: 1, lg: 3 },
              pr: { xs: 1, lg: 3 },
              pt: 1,
              pb: 1,

              width: 'fit-content',

              fontFamily: 'Kanit-ExtraLight',

              color: 'white',

              '&:hover': {
                backgroundColor: '#0A35CD80',
                borderRadius: '6px',
                textDecoration: 'none',
              },
            }}
            href="/corporate/#soluções"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>Soluções</Box>
          </Link>
          <Link
            sx={{
              pl: { xs: 1, lg: 3 },
              pr: { xs: 1, lg: 3 },
              pt: 1,
              pb: 1,

              width: 'fit-content',

              fontFamily: 'Kanit-ExtraLight',

              color: 'white',

              '&:hover': {
                backgroundColor: '#0A35CD80',
                borderRadius: '6px',
                textDecoration: 'none',
              },
            }}
            href="/corporate/#fornecedores"
          >
            Fornecedores
          </Link>
          <Link
            sx={{
              pl: { xs: 1, lg: 3 },
              pr: { xs: 1, lg: 3 },
              pt: 1,
              pb: 1,

              width: 'fit-content',

              fontFamily: 'Kanit-ExtraLight',

              color: 'white',
              '&:hover': {
                backgroundColor: '#0A35CD80',
                borderRadius: '6px',
                textDecoration: 'none',
              },
            }}
            href="/corporate/#clientes"
          >
            Clientes
          </Link>
          <Box
            sx={{
              minWidth: '191px',
              textAlign: 'center',
              border: '1.5px solid white',
              pl: { xs: 1, lg: 3 },
              pr: { xs: 1, lg: 3 },
              pt: 1,
              pb: 1,
              borderRadius: 1,
              fontFamily: 'Kanit-ExtraLight',
              color: 'white',
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'none',
                backgroundColor: '#0A35CD80',
              },
            }}
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send/?phone=5534999482515&type=phone_number&app_absent=0',
                '_blank'
              )
            }
          >
            Fale com um agente
          </Box>
        </Stack>
      )}
      {!mdUp && <NavMobile data={navConfig} />}
    </Box>
  );
}
