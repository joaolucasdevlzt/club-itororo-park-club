import { Theme, SxProps } from '@mui/material';

const titleStyles: SxProps<Theme> = {
  fontFamily: 'Prompt-SemiBold',
  fontSize: { xs: 24, sm: 32 },
  color: (t) => t.palette.secondary.main,
};

const subtitleStyles: SxProps<Theme> = {
  fontFamily: 'Kanit-Light',
  fontSize: { xs: 16, sm: 20 },
  color: (t) => t.palette.secondary.main,
};

const fieldStyles: SxProps<Theme> = { borderRadius: 1, width: '100%', backgroundColor: 'white' };

const wrapperStyles: SxProps<Theme> = {
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(/assets/background/lazertur/newsletter.svg)`,
  aspectRatio: '10/6.45',
  borderRadius: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const titleWrapperStyles: SxProps<Theme> = {
  px: { xs: 3, lg: 15 },
  py: { xs: 5, lg: 15 },
  maxWidth: 900,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 3,
};

const buttonStyles: SxProps<Theme> = {
  pl: 5,
  pr: 5,
  borderColor: '#F9FAFA',
  border: 1,
  fontWeight: 'light',
  fontFamily: 'Kanit-Regular',
  fontSize: 20,
  textAlign: 'center',
  color: '#F9FAFA',
  ':disabled': {
    backgroundColor: '#8F99A0',
    color: 'white',
    borderColor: '#8F99A0',
  },
  backgroundColor: '#E33149',
  '&:hover': {
    borderColor: '#E33149',
    border: 1,
    backgroundColor: '#E33149',
    color: '#F9FAFA',
  },
};

export {
  fieldStyles,
  titleStyles,
  buttonStyles,
  wrapperStyles,
  subtitleStyles,
  titleWrapperStyles,
};
