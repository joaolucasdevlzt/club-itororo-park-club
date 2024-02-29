import { useState, useEffect } from 'react';

import { Box, useTheme, useMediaQuery } from '@mui/material';

import SimpleImage from 'src/components/simple-image';

export default function ImageSection({ images }: { images: string[] }) {
  const theme = useTheme();
  const isSmallerThanMd = useMediaQuery(theme.breakpoints.down('md'));
  const [widths, setWidth] = useState<number>(1400);
  const getScreenWidth = () => {
    const { innerWidth } = window;
    return innerWidth;
  };
  const handleWindowResize = () => {
    setWidth(getScreenWidth());
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  // calcula o tamanho que a imagem precisa ter para continuar preenchendo o espaço do pai
  const handleImageWidth = () => {
    // só calcula para desktop >900
    const value = widths - 900;
    const heightRatio = 18.5 - value * 0.02;
    if (heightRatio <= 10.5) return 10.5;
    if (heightRatio >= 18.5) return 18.5;
    return heightRatio;
  };
  if (isSmallerThanMd) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          gap: 5,
        }}
      >
        <SimpleImage image={images[0] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <SimpleImage image={images[1] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'} />
          <SimpleImage image={images[2] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <SimpleImage image={images[3] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'} />
          <SimpleImage image={images[4] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'} />
          <SimpleImage image={images[5] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'} />
          <SimpleImage image={images[6] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'} />
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pr: 3,
        gap: 2,
        height: '100%',
      }}
    >
      <SimpleImage
        aspectRatio={`16/${handleImageWidth()}`}
        image={images[0] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'}
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image={images[1] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'}
        />
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image={images[2] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image={images[3] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'}
        />
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image={images[4] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'}
        />
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image={images[5] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'}
        />
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image={images[6] || '/assets/images/highlight-packages/fortaleza/fortaleza_8.png'}
        />
      </Box>
    </Box>
  );
}
