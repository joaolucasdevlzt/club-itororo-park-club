import { useState, useEffect, useCallback } from 'react';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { usePathname } from 'src/routes/hooks';

import Logo from 'src/components/logo';
import SvgColor from 'src/components/svg-color';
import Scrollbar from 'src/components/scrollbar';

import { Box, Link, createTheme } from '@mui/material';
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
        <SvgColor color="rgba(150, 150, 150, 1)" src="/assets/icons/navbar/ic_menu_item.svg" />
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
            <Link variant="body2" href="/registration">
              Cadastre-se
            </Link>
            <Link
              variant="body2"
              href="https://ffoperadora.infotravel.com.br/infotravel/login.xhtml"
              sx={{
                py: 1,
                px: 3,
                borderRadius: 1,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  textDecoration: 'none',
                  backgroundColor: theme.palette.grey[100],
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  border: 1,
                },
              }}
            >
              Entrar
            </Link>
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
}
