import { Box, SxProps, Typography } from '@mui/material';

interface FAQCardProps {
  link?: boolean;
  title: string;
  text: string;
  sx?: SxProps;
}
export default function FAQCard({ link = false, title, text, sx }: FAQCardProps) {
  return (
    <Box
      sx={{
        minWidth: 310,
        width: '100%',
        height: '100%',
        p: 5,
        display: 'flex',
        flexDirection: 'column',
        border: 1,
        borderColor: '#E5E6EE',
        borderRadius: 3,
        backgroundColor: 'white',
        gap: 3,
        ...sx,
      }}
    >
      <Typography sx={{ fontFamily: 'Prompt-SemiBold', fontSize: 22, color: (t) => t.palette.secondary.main }}>
        {title}
      </Typography>
      <Typography sx={{ fontFamily: 'kanit-Light', fontSize: 16, color: (t) => t.palette.secondary.main }}>
        {text}
        {link && (
          <a href="https://www.feriasfacil.com.br" target="__blank">
            Férias Fácil.com.br
          </a>
        )}
      </Typography>
    </Box>
  );
}
