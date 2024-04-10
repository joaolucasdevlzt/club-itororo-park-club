import { Box, Typography } from '@mui/material';

export default function Card({ title, text }: { title: string; text: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        padding: 3,
        height: '100%',
        width: '100%',
        borderRadius: 2,
        border: '1px solid #E5E6EE',
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Kanit-Regular', color: '#28327F' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Kanit-Regular', color: '#28327F' }}>
        {text}
      </Typography>
    </Box>
  );
}
