import { Box, Typography } from '@mui/material';

interface CardWithTitleAndTextProps {
  image: String;
  title: string;
  text: string;
}
export default function CardWithTitleAndText({ image, title, text }: CardWithTitleAndTextProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
        width: '100%',
        aspectRatio: '10/7.2',
        borderRadius: 2,
        backgroundImage: `url(/assets/cards/${image}.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        pl: 5,
        pr: 15,
      }}
    >
      <Typography
        sx={{
          fontSize: '26px',
          lineHeight: 1.3,
          fontFamily: 'Prompt-SemiBold',
          color: 'white',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: 1.3,
          fontFamily: 'Prompt-Thin',
          color: 'white',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

/**
 * /* Rectangle 135 

position: absolute;
width: 413px;
height: 300px;
left: 956px;
top: 587px;

background: linear-gradient(90deg, rgba(40, 50, 127, 0.2) 27.23%, rgba(40, 50, 127, 0) 60.43%), url(Sobre-2.jpg);
border-radius: 15px;

 */
