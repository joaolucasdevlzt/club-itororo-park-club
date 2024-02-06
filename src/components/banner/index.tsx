import { useState } from 'react';

import { Box, SxProps } from '@mui/material';

import Iconify from '../iconify';

interface BannerProps {
  images: string | string[];
  sx?: SxProps;
}
export default function Banner({ sx, images }: BannerProps) {
  const [active, setActive] = useState<number>(0);
  const handleCarousel = (action: string) => {
    switch (action) {
      case 'left':
        setActive((state) => (state === 0 ? images.length - 1 : state - 1));

        break;
      case 'right':
        setActive((state) => (state === images.length - 1 ? 0 : state + 1));
        break;
      default:
        break;
    }
  };
  if (!images.length) {
    return <Box />;
  }
  if (Array.isArray(images) && images.length) {
    return (
      <Box sx={{ width: '100%', position: 'relative', fontSize: 16 }}>
        <Box
          sx={{
            width: '100%',
            aspectRatio: '13/3.8',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${images[active]})`,
            ...sx,
          }}
        />

        <Box
          sx={{
            width: '100%',
            px: 5,
            position: 'absolute',
            top: '50%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Iconify
            onClick={() => handleCarousel('left')}
            sx={{ color: 'white', height: 50, width: 50 }}
            icon="tabler:chevron-left"
          />
          <Iconify
            onClick={() => handleCarousel('right')}
            sx={{ color: 'white', height: 50, width: 50 }}
            icon="tabler:chevron-right"
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            px: 5,
            position: 'absolute',
            bottom: 10,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {images.map((_, index) => (
            <Box
              onClick={() => setActive(index)}
              sx={{
                width: 35,
                height: 5,
                backgroundColor: index === active ? 'white' : '#8F99A0',
              }}
            />
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        border: 1,
        width: '100%',
        aspectRatio: '13/3.8',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${images})`,
        ...sx,
      }}
    />
  );
}
