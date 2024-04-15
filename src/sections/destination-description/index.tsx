// eslint-disable-next-line import/no-extraneous-dependencies
import HTMLReactParser from 'html-react-parser';

import { Box, Typography } from '@mui/material';

import StyledButton from 'src/components/button';

export default function DestinationDescription({ title, texts }: { title: string; texts: string }) {
  return (
    <Box sx={{ mt: { xs: 5, lg: 0 }, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pr: 5, pl: { md: 3 } }}>
        <Typography
          sx={{
            lineBreak: 'strict',
            fontFamily: 'Kanit-Light',
            color: (t) => t.palette.secondary.main,
          }}
        >
          {HTMLReactParser(texts)}
        </Typography>
      </Box>
      <Box
        sx={{
          pl: { md: 3 },
          width: '100%',
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <StyledButton
          sx={{ width: 'fit-content', maxWidth: 500, pl: 5, pr: 5 }}
          text="Planeje sua viagem agora mesmo"
          callback={() =>
            window.open(
              'https://api.whatsapp.com/send/?phone=553432556831&text=Ol%C3%A1%2C+tenho+interesse+nessa+oferta+exclusiva%21&type=phone_number&app_absent=0',
              '_blank'
            )
          }
        />
      </Box>
    </Box>
  );
}
