import { m } from 'framer-motion';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link, { LinkProps } from '@mui/material/Link';
import { styled, useTheme } from '@mui/material/styles';
import CardActionArea from '@mui/material/CardActionArea';
import ListItemButton from '@mui/material/ListItemButton';

import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';

import { HEADER } from 'src/layouts/config-layout';
import { NavItemProps, NavItemStateProps } from '../types';

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ title, path, open, active, hasChild, externalLink, subItem, ...other }, ref) => {
    const theme = useTheme();
    const renderContent = (
      <StyledNavItem
        disableRipple
        disableTouchRipple
        ref={ref}
        open={open}
        active={active}
        subItem={subItem}
        {...other}
      >
        {title}

        {hasChild && <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />}
        {open && (
          <Box sx={{ position: 'absolute', background: 'transparent' }}>
            <Box
              sx={{
                width: 25,
                height: 25,
                borderRadius: '50%',
                backgroundColor: '#0063FF',
                position: 'relative',
                left: '50%',
                top: HEADER.H_DESKTOP_OFFSET / 2,
                zIndex: 4,
                ml: 2,
              }}
            />
          </Box>
        )}
      </StyledNavItem>
    );

    if (hasChild) {
      return <Box color={theme.palette.grey[500]}>{renderContent}</Box>;
    }

    if (externalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
          {renderContent}
        </Link>
      );
    }
    if (path.includes('#')) {
      return (
        <Link
          onClick={() => {
            const section = document.querySelector(path);
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          component={RouterLink}
          href={path}
          color={theme.palette.grey[500]}
          underline="none"
        >
          {renderContent}
        </Link>
      );
    }

    return (
      <Link component={RouterLink} href={path} color={theme.palette.grey[500]} underline="none">
        {renderContent}
      </Link>
    );
  }
);

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'subItem',
})<NavItemStateProps>(({ open, active, subItem, theme }) => {
  const opened = open && !active;

  return {
    // Root item
    ...(!subItem && {
      ...theme.typography.subtitle1,
      padding: 0,
      height: '100%',
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightBold,
        backgroundColor: 'transparent',
      },
      ...(active && {
        color: theme.palette.primary.darker,
        fontWeight: theme.typography.fontWeightSemiBold,
      }),
      ...(opened && {
        opacity: 1,
      }),
    }),

    // Sub item
    ...(subItem && {
      ...theme.typography.subtitle2,
      padding: 0,
      fontSize: 14,
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
      },
      ...(active && {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightSemiBold,
      }),
      ...(active && {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightSemiBold,
      }),
    }),
  };
});

// ----------------------------------------------------------------------

type NavItemDashboardProps = LinkProps & {
  path: string;
};

export function NavItemDashboard({ path, sx, ...other }: NavItemDashboardProps) {
  return (
    <Link component={RouterLink} href={path} sx={{ width: 1, height: 1 }} {...other}>
      <CardActionArea
        sx={{
          height: 1,
          minHeight: 320,
          borderRadius: 1.5,
          color: 'text.disabled',
          bgcolor: 'background.neutral',
          px: { md: 3, lg: 10 },
          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}
