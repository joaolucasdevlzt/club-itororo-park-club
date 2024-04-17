import { useState, useEffect, useCallback } from 'react';

import Drawer from '@mui/material/Drawer';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { usePathname } from 'src/routes/hooks';

import Iconify from 'src/components/iconify';

import { NavProps } from '../types';

// ----------------------------------------------------------------------

export default function NavMobile({ data }: NavProps) {
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
        <Iconify color="white" height={28} width={28} icon="mingcute:menu-fill" />
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
        <Box
          sx={{
            height: '100%',
            backgroundColor: '#192033',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 4,
            pl: 2.5,
            pt: 4,
          }}
        >
          <Box
            sx={{
              marginBottom: 3,
              width: '128px',
              height: '60px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundImage: 'url(/logo/corporate_logo.svg)',
            }}
          />

          <Typography
            onClick={() => {
              handleCloseMenu();
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            sx={{
              width: 'fit-content',
              fontFamily: 'Kanit-ExtraLight',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>Sobre nós</Box>
          </Typography>
          <Typography
            sx={{
              width: 'fit-content',

              fontFamily: 'Kanit-ExtraLight',

              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>Soluções</Box>
          </Typography>
          <Typography
            sx={{
              width: 'fit-content',

              fontFamily: 'Kanit-ExtraLight',

              color: 'white',
            }}
          >
            Fornecedores
          </Typography>
          <Typography
            sx={{
              width: 'fit-content',

              fontFamily: 'Kanit-ExtraLight',

              color: 'white',
            }}
          >
            Clientes
          </Typography>
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
            }}
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send/?phone=553432556831&text=Ol%C3%A1%2C+tenho+interesse+nessa+oferta+exclusiva%21&type=phone_number&app_absent=0',
                '_blank'
              )
            }
          >
            Fale com um agente
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
