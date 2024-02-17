import { useState, useEffect, useCallback } from 'react';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Box, Link, createTheme } from '@mui/material';

import { usePathname } from 'src/routes/hooks';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import NavList from './nav-list';
import { NavProps } from '../types';

// ----------------------------------------------------------------------

export default function NavMobile({ data }: NavProps) {
  const theme = createTheme();
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      <IconButton onClick={handleOpenMenu} sx={{ ml: 1 }}>
        <Iconify height={28} width={28} icon="mingcute:menu-fill"/>
      </IconButton>

      <Drawer
        open={openMenu}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />
          {data.map((list) => (
            <NavList key={list.title} data={list} />
          ))}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 2,
              pl: 4,
              pt: 4,
            }}
          >
            <Link
                sx={{
                  fontSize: '1rem',
                  fontFamily: 'Kanit-Regular',
                  fontWeight: theme.typography.fontWeightSemiBold,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: (t) => t.palette.secondary.main,
                }}
                href="/"
              >
             
                Home
              </Link>
            <Link
                sx={{
                  fontSize: '1rem',
                  fontFamily: 'Kanit-Regular',
                  fontWeight: theme.typography.fontWeightSemiBold,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: (t) => t.palette.secondary.main,
                }}
                href="/sobre"
              >
            
                Sobre nós
              </Link>
            <Box
                sx={{
                  fontSize: '1rem',
                  fontFamily: 'Kanit-Regular',
                  fontWeight: theme.typography.fontWeightSemiBold,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: (t) => t.palette.secondary.main,
                }}
                onClick={()=>window.open('https://api.whatsapp.com/send/?phone=553432556831&text=Ol%C3%A1%2C+tenho+interesse+nessa+oferta+exclusiva%21&type=phone_number&app_absent=0', '_blank')}
              >
                <Box component="img" src="/assets/icons/lazertur/headset.svg" />
                Fale com um consultor
              </Box>
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
}
