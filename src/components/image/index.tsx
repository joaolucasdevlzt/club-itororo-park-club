import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import { ImageInterface } from './types';

export default function Image({
  image,
  title,
  titlePosition = 'bottom-left',
  aspectRatio = '16/9',
}: ImageInterface) {
  const [hover, setHover] = useState<boolean>(false);
  const titlePositions = {
    'top-left': { top: 15, left: 15 },
    'top-right': { top: 15, right: 15 },
    'bottom-left': { bottom: 15, left: 15 },
    'bottom-right': { bottom: 15, right: 15 },
  };
  const handleHover = () => {
    setHover((prev) => !prev);
  };
  return (
    <Box
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      sx={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio,
          borderRadius: 2,
          backgroundImage: `url(/assets/images/lazertur/${image}.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          ...(hover && {
            transform: 'scale(1.2)',
            transition: 'all 1s ease-out',
          }),
          ...(!hover && {
            transform: 'scale(1)',
            transition: 'all 1s ease-in',
          }),
        }}
      />
      <Box sx={{ position: 'absolute', ...titlePositions[titlePosition] }}>
        <Typography sx={{ color: 'white', fontFamily: 'Prompt-Medium', fontSize:{xs:16,sm:26, md:32,} }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
