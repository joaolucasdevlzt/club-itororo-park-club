import { Box } from '@mui/material';

type Images = {
  images: string[];
  height?: string;
};

export default function ResponsiveCarousel({ images, height = '55vw' }: Images) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height,
        overflow: 'hidden',
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          height: 'auto',
        },
      }}
    >
      {images.slice(0, 6).map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`slide-${index}`}
          sx={{
            width: { xs: '100%', sm: 'calc(100% / 2 - 140px)' },
            height: 'auto',
            borderRadius: '15px',
            objectFit: 'cover', 
          }}
        />
      ))}
    </Box>
  );
}