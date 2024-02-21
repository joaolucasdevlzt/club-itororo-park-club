import { ReactNode } from 'react';

import { Box, SxProps, Typography } from '@mui/material';

import Iconify from '../iconify';

interface IconButtonProps {
  icon: ReactNode | string;
  text: string;
  direction?: 'left' | 'right';
  iconSx?: SxProps;
  textSx?: SxProps;
  callback: () => void;
}
export default function IconButton({
  icon,
  text,
  direction = 'left',
  iconSx,
  textSx,
  callback
}: IconButtonProps) {
  const iconPosition = {
    left: 'row',
    right: 'row-reverse',
  };
  return (
    <Box
      onClick={callback}
      sx={{
        padding: 2,
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        flexDirection: iconPosition[direction],
        width: 'fit-content',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '#E5E6EE99',
        },
      }}
    >
      {typeof icon === 'string' ? <Iconify icon={icon} sx={iconSx} /> : icon}
      <Typography
        sx={{ color: (t) => t.palette.secondary.main, fontFamily: 'Kanit-Regular', ...textSx }}
      >
        {text}
      </Typography>
    </Box>
  );
}
