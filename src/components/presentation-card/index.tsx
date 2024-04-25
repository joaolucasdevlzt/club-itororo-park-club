import { Box, Button, Typography, createTheme, useMediaQuery } from '@mui/material';

interface Props {
  link: string;
  company: string;
  text: string;
  buttonText: string;
}
export default function PresentationCard({ company, text, buttonText, link }: Props) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 700,
        lg: 1000,
        xl: 1536,
      },
    },
  });
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgDown = useMediaQuery(theme.breakpoints.up('lg'));
  console.log(mdUp, lgDown);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        pl: 3,
        pr: 3,
        width: '100%',
        borderRadius: 2,
        aspectRatio: { xs: '10/6', md: '10/6' },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundImage: `url(/assets/images/corporate/${company}_redirect.jpg)`,
      }}
    >
      <Box
        sx={{
          width: { xs: '75%', sm: '60%', lg: '57.8%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            width: '100%',
            aspectRatio: '10/3',
            backgroundSize: 'contain',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(/logo/${company}_logo_card.svg)`,
          }}
        />
        <Typography
          sx={{
            color: 'white',
            textAlign: 'end',
            fontSize: { xs: '12px', sm: '16px', md: '18px', lg: '18px' },
            fontWeight: 'normal',
            fontFamily: 'Kanit-ExtraLight',
          }}
        >
          {text}
        </Typography>
        <Button
          onClick={() => window.open(link, '_blank')}
          sx={{
            pl: { xs: 2, sm: 3 },
            pr: { xs: 2, sm: 3 },

            fontSize: { xs: '12px', sm: '16px', lg: '18px' },
            border: '1px solid white',
            color: 'white',
            fontWeight: 'normal',
            fontFamily: 'Kanit-ExtraLight',
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
}
