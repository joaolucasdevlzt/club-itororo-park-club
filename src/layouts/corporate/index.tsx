

import Header from './header';
import Footer from './footer';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function CorporateLayout({ children }: Props) {
  return (
    <>
      <Header />
   
    
      <Footer />
    </>
  );
}
