import { Button, SxProps } from '@mui/material';

interface StyledButtonProps {
  text: string;
  callback: () => void;
  sx?: SxProps;
}

export default function StyledButton({ text, callback, sx }: StyledButtonProps) {
  return (
    <Button
      onClick={callback}
      sx={{
        width: '100%',
        fontWeight: 'light',
        fontFamily: 'Kanit-Regular',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#E33149',
        color: '#F9FAFA',
        border: 1,
        borderColor: '#E33149',
        '&:hover': {
          backgroundColor: '#F9FAFA',
          color: '#E33149',
          borderColor: '#E33149',
          border: 1,
        },
        ...sx,
      }}
      title={text}
    >
      {text}
    </Button>
  );
}
