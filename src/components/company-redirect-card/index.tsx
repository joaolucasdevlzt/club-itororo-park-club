import { Box, Grid } from '@mui/material';

interface CompanyRedirectCardProps {
  company: string;
  url: string;
}
export default function CompanyRedirectCard({ company, url }: CompanyRedirectCardProps) {
  return (
    <Box
      onClick={() => window.open(url, 'blank')}
      sx={{
        width: '100%',
        borderRadius: 2,
        py: 2,
        px: { xs: 3, sm: 10, md: 3 },
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '#E5E6EE',
        },
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
      </Grid>
    </Box>
  );
}
