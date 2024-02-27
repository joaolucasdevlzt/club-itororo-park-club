import { Box, Grid, Typography } from '@mui/material';

import { data } from './data';

export default function IconTextCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '50px',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        gap: '50px',
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: '100%',
            boxShadow: 2,
            border: 1,
            borderColor: '#E5E6EE',
            borderRadius: '15px',
            height: '277px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container direction="column" alignItems="center" spacing={0}>
            <Grid>
              <img src={item.img} alt={`Icon ${index}`} />
            </Grid>
            <Grid item style={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'Kanit-Light',
                  color: '#28327F',
                  fontSize: { xs: '14px', sm: '18px', md: '18px' },
                  padding: 2,
                  whiteSpace: 'pre-line',
                }}
                align="center"
              >
                {item.text}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
