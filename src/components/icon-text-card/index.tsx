import { Grid, Typography } from '@mui/material';

import { data } from './data';

export default function IconTextCard() {
  return (
    <Grid
      gap={2}
      container
      sx={{
        display: 'flex',

        justifyContent: 'space-between',
      }}
    >
      {data.map((item, index) => (
        <Grid
        
          item
          xs={5.6}
          md={2.5}
          key={index}
          sx={{
            mb:{xs:2,sm:0},
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
        </Grid>
      ))}
    </Grid>
  );
}
