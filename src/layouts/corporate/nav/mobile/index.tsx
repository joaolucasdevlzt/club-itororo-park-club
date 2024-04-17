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
        <Iconify height={28} width={28} icon="mingcute:menu-fill" />
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
              gap: 4,
              pl: 2.5,
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
              <Home />
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
              href="/serviços"
            >
              <Plus />
              Mais serviços
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
              <Info />
              Sobre nós
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
              href="/ajuda"
            >
              <Help />
              Ajuda
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
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send/?phone=553432556831&text=Ol%C3%A1%2C+tenho+interesse+nessa+oferta+exclusiva%21&type=phone_number&app_absent=0',
                  '_blank'
                )
              }
            >
              <Headset />
              Fale com um consultor
            </Box>
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
}

const Info = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2617_1123)">
      <g clipPath="url(#clip1_2617_1123)">
        <path
          d="M10.832 5.83203C10.832 6.29297 10.457 6.66406 10 6.66406C9.54297 6.66406 9.16797 6.28906 9.16797 5.83203C9.16797 5.375 9.53906 5 10 5C10.4609 5 10.832 5.375 10.832 5.83203ZM20 10C20 4.48438 15.5156 0 10 0C4.49219 0 0 4.49219 0 10C0 15.5156 4.48438 20 10 20C15.5234 20 20 15.5234 20 10ZM19.168 10.0703C19.168 15.0938 15.0938 19.168 10.0703 19.168C5.05078 19.168 0.859375 15.0625 0.835938 10.043C0.808594 4.95312 4.95312 0.808594 10.043 0.832031C15.0625 0.855469 19.168 5.05078 19.168 10.0703ZM10.832 9.58203C10.832 8.89453 10.2695 8.33203 9.58203 8.33203H7.5V9.16406H9.58203C9.8125 9.16406 10 9.35156 10 9.58203V15.832H10.832V9.58203Z"
          fill="#28327F"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2617_1123">
        <rect width="20" height="20" fill="white" />
      </clipPath>
      <clipPath id="clip1_2617_1123">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Help = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2617_1128)">
      <path
        d="M10.047 9.07472e-05C4.49618 -0.0233468 -0.0233468 4.49618 9.07472e-05 10.047C0.0235282 15.5196 4.60165 20.0001 10.0743 20.0001C15.5548 20.0001 20.0001 15.5548 20.0001 10.0743C20.0001 4.60165 15.5196 0.0235282 10.047 9.07472e-05ZM10.0704 19.1681C5.05087 19.1681 0.859466 15.0626 0.836028 10.0431C0.808684 4.95322 4.95322 0.808684 10.0431 0.832122C15.0626 0.855559 19.1681 5.05087 19.1681 10.0665C19.1681 15.0938 15.0938 19.1681 10.0704 19.1681ZM13.2813 6.89853C13.5313 8.3165 12.8556 9.73056 11.6056 10.422C10.9727 10.7735 10.4142 11.7931 10.4142 12.6134V13.336H9.58212V12.6134C9.58212 11.4962 10.3087 10.1876 11.2032 9.6954C12.1563 9.16806 12.6485 8.129 12.4571 7.04697C12.2813 6.04306 11.4571 5.22275 10.4532 5.04306C9.69931 4.91415 8.96493 5.10556 8.39072 5.58603C7.82431 6.06259 7.50009 6.7579 7.50009 7.50009H6.66806C6.66806 6.51181 7.10165 5.58212 7.85947 4.9454C8.61728 4.30868 9.61337 4.04697 10.6017 4.21884C11.9415 4.45322 13.047 5.55868 13.2813 6.89853ZM10.8321 15.8321C10.8321 16.2931 10.4571 16.6642 10.0001 16.6642C9.54306 16.6642 9.16806 16.2892 9.16806 15.8321C9.16806 15.3751 9.53915 15.0001 10.0001 15.0001C10.461 15.0001 10.8321 15.3751 10.8321 15.8321Z"
        fill="#28327F"
      />
    </g>
    <defs>
      <clipPath id="clip0_2617_1128">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Home = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 1.16602L1.5 7.66602V18.916H2.33333V9.83268V8.08268L10 2.33268L17.6667 8.08268V14.416V18.916H18.5V7.66602L10 1.16602Z"
      fill="#28327F"
    />
    <path
      d="M7.3335 12.084V15.084V18.9173H8.25016V13.0007H11.7502V18.9173H12.6668V14.4173V12.084H7.3335Z"
      fill="#28327F"
    />
  </svg>
);
const Plus = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2617_1117)">
      <g clipPath="url(#clip1_2617_1117)">
        <path
          d="M14.1667 10C14.1667 10.23 13.98 10.4167 13.75 10.4167H10.4167V13.75C10.4167 13.98 10.23 14.1667 10 14.1667C9.77 14.1667 9.58333 13.98 9.58333 13.75V10.4167H6.25C6.02 10.4167 5.83333 10.23 5.83333 10C5.83333 9.77 6.02 9.58333 6.25 9.58333H9.58333V6.25C9.58333 6.02 9.77 5.83333 10 5.83333C10.23 5.83333 10.4167 6.02 10.4167 6.25V9.58333H13.75C13.98 9.58333 14.1667 9.77 14.1667 10ZM20 3.75V16.25C20 18.3175 18.3175 20 16.25 20H3.75C1.6825 20 0 18.3175 0 16.25V3.75C0 1.6825 1.6825 0 3.75 0H16.25C18.3175 0 20 1.6825 20 3.75ZM19.1667 3.75C19.1667 2.14167 17.8583 0.833333 16.25 0.833333H3.75C2.14167 0.833333 0.833333 2.14167 0.833333 3.75V16.25C0.833333 17.8583 2.14167 19.1667 3.75 19.1667H16.25C17.8583 19.1667 19.1667 17.8583 19.1667 16.25V3.75Z"
          fill="#28327F"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2617_1117">
        <rect width="20" height="20" fill="white" />
      </clipPath>
      <clipPath id="clip1_2617_1117">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Headset = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2617_1133)">
      <path
        d="M20.0001 14.3281C19.9962 12.7734 19.0743 11.3633 17.6525 10.7383L17.4103 10.6328V9.12891C17.4103 5.04297 14.0861 1.72266 10.004 1.72266C5.9181 1.72266 2.59779 5.04688 2.59779 9.12891V10.6328L2.3556 10.7383C0.371225 11.6133 -0.535025 13.9375 0.339975 15.9258C0.964975 17.3477 2.37513 18.2695 3.92982 18.2734H5.25794V10.4062H3.51576V9.13281C3.51576 5.55859 6.42591 2.64844 10.0001 2.64844C13.5743 2.64844 16.4845 5.55859 16.4845 9.13281V10.4062H14.7462V17.3516H11.2736V18.2734H16.0783C17.129 18.2695 18.1134 17.8594 18.8556 17.1133C19.5978 16.3711 20.004 15.3828 20.0001 14.3281ZM3.92201 11.3281H4.32826V17.3516H3.92201C2.26185 17.3516 0.910287 16 0.910287 14.3398C0.910287 12.6797 2.26185 11.3281 3.92201 11.3281ZM16.0783 17.3555H15.672V11.3281H16.0783C17.7384 11.3281 19.09 12.6797 19.09 14.3398C19.09 16 17.7384 17.3555 16.0783 17.3555Z"
        fill="#28327F"
      />
    </g>
    <defs>
      <clipPath id="clip0_2617_1133">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
