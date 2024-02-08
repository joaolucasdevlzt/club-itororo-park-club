import { ReactNode } from 'react';

import { Box } from '@mui/material';

export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
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
