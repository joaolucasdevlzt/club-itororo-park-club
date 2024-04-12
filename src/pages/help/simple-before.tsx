import { Box, Typography } from '@mui/material';

export default function SimpleBefore({ list }: { list: string[] }) {
  return (
    <Box>
      {list.map((item, index) => (
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
