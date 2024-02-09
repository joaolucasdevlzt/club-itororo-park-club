import { Box, Grid, Button, Typography } from '@mui/material';

import { CTACardInterface } from './types';

export default function CTACard({
  icon,
  iconProps,
  text,
  buttonText,
  cardProps,
  buttonProps,
}: CTACardInterface) {
  return (
    <Grid
      container
      sx={{
        borderRadius: 2,
        marginBottom: 10,
        padding: 4,
        backgroundColor: '#E5E6EE',
        display: 'flex',
        justifyContent: { xs: 'flex-start', md: 'space-evenly' },
        alignItems: 'center',
        gap: { xs: 3, md: 0, lg: 0 },
        ...cardProps,
      }}
    >
      <Grid item xs={3} sm={2} md={2} lg={1.3}>
        <Box
          sx={{ width: 63, ...iconProps }}
          component="img"
          src={`/assets/icons/lazertur/${icon}.svg`}
        />
      </Grid>
      <Grid
        container
        item
        xs={7.5}
        sm={9}
        md={9}
        lg={10}
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', md: 'space-evenly' },
          alignItems: 'center',
          gap: { xs: 2, md: 1, lg: 0 },
        }}
      >
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <Typography
            sx={{
              color: '#28327F',
              fontSize: 14,
              fontFamily: 'Prompt-Regular',
              fontWeight: 600,
            }}
          >
            {text}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={12}
          lg={6}
          sx={{
            display: 'flex',
            justifyContent: { sm: 'flex-end', md: 'flex-start', lg: 'flex-end' },
          }}
        >
          <Button
            sx={{
              pl: 3,
              pr: 3,
              color: '#28327F',
              border: 1,
              ...buttonProps,
            }}
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
