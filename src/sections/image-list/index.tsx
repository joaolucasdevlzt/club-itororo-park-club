import { useState, useEffect } from 'react';

import { Box, useTheme, useMediaQuery } from '@mui/material';

import SimpleImage from 'src/components/simple-image';

export default function ImageSection() {
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
  const handleImageWidth = () => {
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
          gap: 2,
        }}
      >
        <SimpleImage image="/assets/images/lazertur/maceio.png" />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <SimpleImage image="/assets/images/lazertur/maceio.png" />
          <SimpleImage image="/assets/images/lazertur/maceio.png" />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <SimpleImage image="/assets/images/lazertur/maceio.png" />
          <SimpleImage image="/assets/images/lazertur/maceio.png" />
          <SimpleImage image="/assets/images/lazertur/maceio.png" />
          <SimpleImage image="/assets/images/lazertur/maceio.png" />
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
        pl: 3,
        height: '100%',
      }}
    >
      <SimpleImage
        aspectRatio={`16/${handleImageWidth()}`}
        image="/assets/images/lazertur/maceio.png"
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image="/assets/images/lazertur/maceio.png"
        />
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image="/assets/images/lazertur/maceio.png"
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image="/assets/images/lazertur/maceio.png"
        />
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image="/assets/images/lazertur/maceio.png"
        />
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image="/assets/images/lazertur/maceio.png"
        />
        <SimpleImage
          aspectRatio={`16/${handleImageWidth()}`}
          image="/assets/images/lazertur/maceio.png"
        />
      </Box>
    </Box>
  );
}
