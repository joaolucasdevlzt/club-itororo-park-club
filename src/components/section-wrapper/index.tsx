import { ReactNode } from 'react';

import { Box, SxProps } from '@mui/material';

export default function SectionWrapper({ children, sx }: { children: ReactNode; sx?: SxProps }) {
  return (
    <Box
      sx={{
        pl: { xs: 3, lg: 0 },
        pr: { xs: 3, lg: 0 },
        maxWidth: 1350,
        width: '100%',
        height: 'auto',
        pt: 10,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
