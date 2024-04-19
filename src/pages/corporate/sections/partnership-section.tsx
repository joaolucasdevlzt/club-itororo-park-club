import { Box, Grid, Typography } from '@mui/material';

const partners = [
  'azul',
  'gol',
  'latam',
  'booking',
  'b2b',
  'sabre',
  'amadeus',
  'hotelbeds',
  'expedia',
  'ehtl',
  'hertz',
  'hotwire',
  'unidas',
  'travelport',
  'travelocity',
  'omnibees',
  'rentcars',
  'iterpec',
];
export default function PartnershipSection() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1520px',
        mt: { xs: 10, sm: 15 },
        pl: { xs: 2, sm: 5, xl: 15 },
        pr: { xs: 2, sm: 5, xl: 15 },
        gap: 5,
      }}
    >
      <Typography
        sx={{
          color: '#0A35CD',
          fontSize: { xs: '20px', sm: '26px', lg: '38px', xl: '46px' },
          fontFamily: 'Kanit-SemiBold',
        }}
      >
        Conheça nossos parceiros
      </Typography>

      <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {partners.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '70%',

                aspectRatio: '10/5',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(/assets/images/corporate/partnerships/${item}.png)`,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
