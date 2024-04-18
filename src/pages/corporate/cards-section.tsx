import { Box, Typography } from '@mui/material';

interface CardsSectionProps {
  image: string;
  title: string;
  text: string;
  direction: 'row' | 'row-reverse';
}
export default function CardsSection({ image, title, text, direction = 'row' }: CardsSectionProps) {
  return (
    <Box
      sx={{
        pt: { xs: 10, sm: 15 },
        pl: { xs: 2, sm: 5, xl: 15 },
        pr: { xs: 2, sm: 5, xl: 15 },
        maxWidth: '1920px',
        width: '100%',

        display: 'flex',
        flexDirection: direction,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          ...(direction === 'row'
            ? { marginRight: { xs: -2, sm: -4 } }
            : { marginLeft: { xs: -2, sm: -4 } }),
          borderRadius: {xs:2, sm:3, md:4},
          width: '130%',
          height: { xs: 312, sm: 500, md: 600 },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: { xs: 'cover', sm: 'cover', md: 'cover', lg: 'contain' },
          backgroundImage: `url(${image})`,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: { xs: '15px', sm: '20px', md: '30px' },
          borderRadius: {xs:2, sm:3, md:4},
          ...(direction === 'row'
            ? { marginLeft: { xs: -2, sm: -4 } }
            : { marginRight: { xs: -2, sm: -4 }, zIndex: 0 }),
          width: '100%',
          height: { xs: 272, sm: 400, md: 430 },
          backgroundColor: 'white',
        }}
      >
        <Typography
          sx={{
            color: (t) => t.palette.secondary.main,
            fontSize: { xs: '17px', sm: '26px', md: '34px', lg: '38px', xl: '46px' },
            fontFamily: 'Kanit-Regular',
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: (t) => t.palette.secondary.main,
            fontSize: { xs: '12px', sm: '19px', md: '22px', lg: '24px' },
            fontFamily: 'Kanit-Regular',
            mt: 2,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
