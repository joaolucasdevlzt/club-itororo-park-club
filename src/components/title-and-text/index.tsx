import { Box, Typography } from '@mui/material';

interface titleAndTextsProps {
  title: string;
  texts: string | string[];
}
export default function TitleAndTexts({ title, texts }: titleAndTextsProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography
        sx={{
          fontSize: '26px',
          lineHeight: 1.3,
          fontFamily: 'Prompt-SemiBold',
          color: (t) => t.palette.secondary.main,
        }}
      >
        {title}
      </Typography>

      {Array.isArray(texts) &&
        texts.map((text) => (
          <Typography
            sx={{
              fontSize: '18px',
              fontFamily: 'Kanit-Light',
              color: (t) => t.palette.secondary.main,
            }}
          >
            {text}
          </Typography>
        ))}
      {typeof texts === 'string' && (
        <Typography
          sx={{
            fontSize: '18px',
            fontFamily: 'Kanit-Light',
            color: (t) => t.palette.secondary.main,
          }}
        >
          {texts}
        </Typography>
      )}
    </Box>
  );
}
