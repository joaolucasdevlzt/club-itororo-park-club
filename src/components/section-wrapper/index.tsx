import { ReactNode } from 'react';

import { Box } from '@mui/material';

export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        pl: { xs: 3, lg: 0 },
        pr: { xs: 3, lg: 0 },
        maxWidth: 1350,
        width: '100%',
        height: 'auto',
        pt: 12,
      }}
    >
      {children}
    </Box>
  );
}
