import { Box, Grid, Button, Typography } from '@mui/material';

import { CTACardInterface } from './types';

export default function CTACard({
  fn,
  icon,
  iconProps,
  text,
  buttonText,
  cardProps,
  buttonProps,
}: CTACardInterface) {
  return (
    <Grid
      onClick={() => fn()}
      container
      sx={{
        height: '100%',
        borderRadius: 2,
        padding: 4,
        backgroundColor: '#E5E6EE',
        display: 'flex',
        justifyContent: { xs: 'flex-start', md: 'space-evenly' },
        alignItems: 'center',
        gap: { xs: 3, md: 0 },
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
          justifyContent: {
            xs: 'flex-start',
            md: 'space-evenly',
            lg: `${buttonText?.length ? 'space-evenly' : 'flex-start'}`,
          },
          alignItems: 'center',
          gap: { xs: 2, md: 1, lg: 0 },
        }}
      >
        <Grid item xs={12} sm={6} md={12} lg={buttonText?.length ? 7 : 8}>
          <Typography
            sx={{
              color: (t) => t.palette.secondary.main,
              fontSize: 16,
              fontFamily: 'Prompt-Regular',
              fontWeight: 600,
            }}
          >
            {text}
          </Typography>
        </Grid>
        {buttonText && (
          <Grid
            item
            xs={12}
            sm={5}
            md={12}
            lg={5}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { sm: 'flex-end', md: 'flex-start', lg: 'flex-end' },
            }}
          >
            <Button
              sx={{
                pl: 3,
                pr: 3,
                color: (t) => t.palette.secondary.main,
                border: 1,
                ...buttonProps,
              }}
              title={buttonText}
            >
              {buttonText}
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
