import { Box, Grid} from '@mui/material';

export default function FAQ() {


  const images = [
  '/assets/images/lazertur/cintomotivostororo1.jpg',
    '/assets/images/lazertur/cintomotivostororo2.jpg',
    '/assets/images/lazertur/cintomotivostororo3.jpg',
    '/assets/images/lazertur/cintomotivostororo4.jpg',
    '/assets/images/lazertur/cintomotivostororo5.jpg',
    '/assets/images/lazertur/cintomotivostororo6.jpg',
  ];

  return (
    <Box>
    
      <Grid container spacing={2} justifyContent="center">
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} key={index} display="flex" justifyContent="center">
            <Box
              component="img"
              src={image}
              alt={`Imagem ${index + 1}`}
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
