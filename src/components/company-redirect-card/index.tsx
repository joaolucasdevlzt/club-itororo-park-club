import { Box, Button } from '@mui/material';

export default function CompanyRedirectCard({ company }: { company: string }) {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 2,
        py: 3,
        px: 5,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

        backgroundColor: '#E5E6EE',
      }}
    >
      <Box
        sx={{
          width: '50%',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(/assets/images/lazertur/companies/${company}.svg)`,
          aspectRatio: '16/7',
        }}
      />
      <Button
        sx={{
          width: 113,
          border: 1.7,
          height: 47,
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
    </Box>
  );
}
