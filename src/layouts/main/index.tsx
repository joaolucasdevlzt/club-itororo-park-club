import Box from '@mui/material/Box';

import { usePathname } from 'src/routes/hooks';

import Header from './header';
import Footer from './footer';
import { HEADER } from '../config-layout';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const pathname = usePathname();
  const homePage = pathname === '/home';
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          display: 'flex',
          backgroundColor: '#F9FAFA',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          ...(!homePage && {
            pt: { xs: `${HEADER.H_MOBILE}px`, md: `${HEADER.H_DESKTOP_OFFSET}px` },
          }),
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
