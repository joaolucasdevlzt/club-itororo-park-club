import { Box, Typography } from '@mui/material';

import StyledButton from 'src/components/button';

import { PriceCardProps } from 'src/types/external/api';

export default function PriceCard({ data }: { data: PriceCardProps }) {
  const {
    price,
    oldPrice = 0,
    descriptionText = '',
    upfront = '',
    split = 0,
    splitValue = 0,
  } = data;
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: 'fit-content',
        padding: 5,
        border: 1,
        borderColor: '#E5E6EE',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 1,
        gap: 3,
      }}
    >
      <Box>
        {oldPrice && (
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Kanit-Regular',
              color: (t) => t.palette.secondary.main,
              textDecoration: 'line-through',
            }}
          >
            De: R$ {oldPrice.toFixed(2)}
          </Typography>
        )}
        <Typography
          variant="h4"
          sx={{ fontFamily: 'Kanit-regular', color: (t) => t.palette.secondary.main }}
        >
          Por: R$ {price.toFixed(2)}
        </Typography>
        {descriptionText && (
          <Typography sx={{ fontFamily: 'Kanit-Light', color: (t) => t.palette.secondary.main }}>
            {descriptionText}
          </Typography>
        )}
      </Box>
      {split && (
        <Box>
          <Typography
            variant="h5"
            sx={{
              height: 30,
              fontFamily: 'Kanit-regular',
              color: (t) => t.palette.primary.main,
            }}
          >
            {split}
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontFamily: 'Kanit-regular', color: (t) => t.palette.primary.main }}
          >
            R$ {splitValue.toFixed(2)}
          </Typography>
          {upfront && (
            <Typography sx={{ fontFamily: 'Kanit-Light', color: (t) => t.palette.secondary.main }}>
              {upfront}
            </Typography>
          )}
        </Box>
      )}
      <Box>
        <StyledButton
          sx={{ fontSize: { xs: 13, sm: 16 } }}
          text="Adquira este pacote com um atendente"
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
