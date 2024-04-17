import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { RouterLink } from 'src/routes/components';

import { NavItemProps, NavItemStateProps } from '../types';

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ title, path, icon, open, active, hasChild, externalLink, ...other }, ref) => {
    const renderContent = (
      <StyledNavItem ref={ref} open={open} active={active} {...other}>
        <Box component="span" sx={{ mr: 2, display: 'inline-flex' }}>
          {icon}
        </Box>

        <Box component="span" sx={{ flexGrow: 1 }}>
          {title}
        </Box>
      </StyledNavItem>
    );

    if (externalLink)
      return (
        <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
          {renderContent}
        </Link>
      );
    if (path.includes('#')) {
      return (
        <Link
          onClick={() => {
            const section = document.querySelector('#newsletter-section');
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          component={RouterLink}
          href={path}
          color="inherit"
          underline="none"
        >
          {renderContent}
        </Link>
      );
    }
    return (
      <Link component={RouterLink} href={path} color="inherit" underline="none">
        {renderContent}
      </Link>
    );
  }
);

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<NavItemStateProps>(({ open, active, theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightMedium,
  height: 48,
}));
