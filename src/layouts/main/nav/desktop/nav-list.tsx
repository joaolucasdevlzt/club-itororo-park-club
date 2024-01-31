import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import { useTheme } from '@mui/material/styles';
import ListSubheader from '@mui/material/ListSubheader';

import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { NavItem } from './nav-item';
import { HEADER } from '../../../config-layout';
import { NavListProps, NavSubListProps } from '../types';

// ----------------------------------------------------------------------

export default function NavList({ data }: NavListProps) {
  const theme = useTheme();
  const pathname = usePathname();
  const active = useActiveLink(data.path, !!data.children);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu(true);
    }
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      <NavItem
        open={openMenu}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={handleCloseMenu}
        //
        title={data.title}
        path={data.path}
        //
        hasChild={!!data.children}
        externalLink={data.path.includes('http')}
        //
        active={active}
      />

      {!!data.children && openMenu && (
        <Portal>
          <Fade in={openMenu}>
            <Paper
              onMouseEnter={handleOpenMenu}
              onMouseLeave={handleCloseMenu}
              sx={{
                borderRadius: 0,
                left: 0,
                backgroundColor: theme.palette.grey[100],
                right: 0,
                m: 'auto',
                display: 'flex',
                position: 'fixed',
                zIndex: 3,
                p: theme.spacing(5, 1, 1, 3),
                top: HEADER.H_DESKTOP_OFFSET,
                boxShadow: theme.customShadows.dropdown,
                width: '100vw',
                maxWidth: '100vw',
                px: 20,
              }}
            >
              {data.children.map((list) => (
                <NavSubList key={list.subheader} subheader={list.subheader} data={list.items} />
              ))}
            </Paper>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

function NavSubList({ data, subheader, sx, ...other }: NavSubListProps) {
  const pathname = usePathname();

  const dashboard = subheader === 'Dashboard';

  return (
    <Stack
      spacing={0.5}
      flexGrow={1}
      alignItems="flex-start"
      sx={{
        pb: 2,
        ...(dashboard && {
          pb: 0,
          maxWidth: { md: 1 / 3, lg: 540 },
        }),
        ...sx,
      }}
      {...other}
    >
      <ListSubheader
        disableSticky
        sx={{
          marginBottom: 2,
          p: 0,
          typography: 'overline',
          fontSize: 18,
          color: '#0063FF',
        }}
      >
        <Box
          component="img"
          src={`/assets/illustrations/continents/${subheader}.svg`}
          sx={{ marginRight: 1, width: 25, height: 25, cursor: 'pointer', ...sx }}
        />
        {subheader}
      </ListSubheader>

      {data.map((item) => (
        <NavItem
          key={item.title}
          title={item.title}
          path={item.path}
          active={pathname === item.path || pathname === `${item.path}/`}
          subItem
        />
      ))}
    </Stack>
  );
}
