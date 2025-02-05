import { Box, Typography } from '@mui/material';

export default function SimpleAfter({ list }: { list: string[] }) {
  return (
    <Box>
      {list.map((item) => (
        <Typography
          sx={{
            marginBottom: 2,
            fontFamily: 'Kanit-Light',
            color: (t) => t.palette.secondary.main,
          }}
          key={item}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
