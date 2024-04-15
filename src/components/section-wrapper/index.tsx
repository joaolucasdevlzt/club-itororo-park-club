import { ReactNode } from 'react';

import { Box, SxProps } from '@mui/material';

export default function SectionWrapper({ children, sx }: { children: ReactNode; sx?: SxProps }) {
  return (
    <Box
      sx={{
        pl: {xs:3, sm:5},
        pr: {xs:3,sm:5},
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
