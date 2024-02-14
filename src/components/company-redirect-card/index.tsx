import { Box, Button, Grid } from '@mui/material';

interface CompanyRedirectCardProps {
  company: string;
  url: string;
}
export default function CompanyRedirectCard({ company, url }: CompanyRedirectCardProps) {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 2,
        py: 2,
        px: { xs: 3, sm: 10, md: 3 },
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

        backgroundColor: '#E5E6EE',
      }}
    >
      <Grid
        container
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Grid item xs={7} md>
          <Box
            sx={{
              width: '100%',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url(/assets/images/lazertur/companies/${company}.svg)`,
              aspectRatio: '16/7',
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => window.open(url, '__blank')}
            sx={{
              width: '100%',
              border: 1.7,
              height: { xs: 55, sm: 60, md: 40, lg:47 },
              fontFamily: 'Kanit-Light',
              fontSize: 18,
              color: '#28327F',
              '&:hover': {
                color: '#E5E6EE',
                backgroundColor: '#28327F',
              },
            }}
          >
            Acessar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
