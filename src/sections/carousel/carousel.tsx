import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import { Fade } from '@mui/material';

import Iconify from 'src/components/iconify';

type Images = {
  images: string[];
  height?: string;
};
export default function FullWidthCarousel({ images, height = '36vw' }: Images) {
  const [slider, setSlide] = useState(true);
  const [image, setCarouselImage] = useState(0);
  const isMoreThanOneImage = images.length > 1;
  const handleCarousel = (action: string) => {
    setSlide(false);
    switch (action) {
      case 'previous':
        setTimeout(() => {
          setSlide(true);
          setCarouselImage((state) => (state === 0 ? images.length - 1 : state - 1));
        }, 300);
        break;
      case 'next':
        setTimeout(() => {
          setSlide(true);
          setCarouselImage((state) => (state === images.length - 1 ? 0 : state + 1));
        }, 300);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMoreThanOneImage) {
        handleCarousel('next');
      }
    }, 6000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  return (
    <Fade timeout={500} in={slider}>
      <Box
        sx={{
          padding: 3,
          width: '100%',
          height,
          backgroundImage: `url(${images[image]})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {isMoreThanOneImage && (
          <Box
            sx={{
              width: { xs: '32px', md: '50px' },
              height: { xs: '32px', md: '50px' },
              borderRadius: '50%',
              backgroundColor: (theme) => theme.palette.grey[900],
              opacity: 0.7,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&: hover': {
                transform: 'scale(1.3)',
                cursor: 'pointer',
                transition: (t) => t.transitions.create('transform'),
              },
            }}
          >
            <Iconify
              sx={{
                width: { xs: '22px', md: '40px' },
                height: { xs: '22px', md: '40px' },
                color: 'white',
              }}
              onClick={() => {
                handleCarousel('previous');
              }}
              icon="fluent:chevron-left-12-filled"
            />
          </Box>
        )}
        {images.length > 1 && (
          <Box
            sx={{
              width: { xs: '32px', md: '50px' },
              height: { xs: '32px', md: '50px' },
              borderRadius: '50%',
              backgroundColor: (theme) => theme.palette.grey[900],
              opacity: 0.7,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&: hover': {
                transform: 'scale(1.3)',
                cursor: 'pointer',
                transition: (t) => t.transitions.create('transform'),
              },
            }}
          >
            <Iconify
              sx={{
                width: { xs: '22px', md: '40px' },
                height: { xs: '22px', md: '40px' },
                color: 'white',
              }}
              onClick={() => {
                handleCarousel('next');
              }}
              icon="fluent:chevron-right-12-filled"
            />
          </Box>
        )}
      </Box>
    </Fade>
  );
}
