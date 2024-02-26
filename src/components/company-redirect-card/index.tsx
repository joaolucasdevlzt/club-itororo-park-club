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
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '#E5E6EE',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(/assets/images/lazertur/companies/${company}.svg)`,
          aspectRatio: '16/6',
        }}
      />
    </Box>
  );
}
