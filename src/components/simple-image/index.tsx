import { Box } from '@mui/material';

import { ImageInterface } from './types';

export default function SimpleImage({ image, aspectRatio = '16/9', sx }: ImageInterface) {
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio,
        borderRadius: 1,
        backgroundImage: `url(${encodeURI(image)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...sx,
      }}
    />
  );
}
