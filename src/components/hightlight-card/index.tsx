import { Box, Grid, Typography } from '@mui/material';

import { HighlightPackagesProps } from 'src/types/external/api';

export default function HighlightCard({
  fn,
  sx,
  imageSx,
  width,
  image,
  aspectRatio = '10/7.9',
  title,
  subtitle,
  content = [],
  semiboldText,
  boldBottomText,
  bottomText,
}: HighlightPackagesProps) {
  return (
    <Box
      onClick={fn}
      sx={{
        minWidth: width,
        maxWidth: width,
        pb: 3,
        height: '100%',
        border: 1,
        borderColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 2.5,
        boxShadow: '10px 10px 25px rgba(95, 122, 137, 0.1)',
        '&:hover': {
          transition: 'all .5s ease',
          boxShadow: '10px 10px 25px rgba(95, 122, 137, .3)',
          borderColor: 'red',
          cursor: 'pointer',
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${image})`,
            aspectRatio,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            ...imageSx,
          }}
        />
        <Grid container item>
          <Grid item xs={12} sx={{ p: '25px 0px 0px 25px' }}>
            <Typography variant="h4" sx={{ color: '#E33149', fontFamily: 'Kanit-Regular' }}>
              {title}
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ p: '0px 0px 15px 25px' }}>
            <Typography
              variant="body1"
              sx={{ color: (t) => t.palette.secondary.main, fontFamily: 'Kanit-Light' }}
            >
              {subtitle}
            </Typography>
          </Grid>
          {content.map((item, index) => (
            <Grid
              key={item.text}
              item
              xs={12}
              sx={{
                p: '0px 0px 5px 25px',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: (t) => t.palette.secondary.main,
                fontFamily: 'Kanit-Light',
              }}
            >
              <Box component="img" src={`/assets/icons/lazertur/${item.icon}.svg`} />
              <Typography
                variant="body1"
                sx={{ color: (t) => t.palette.secondary.main, fontFamily: 'Kanit-Light' }}
              >
                {item.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid container item>
        <Grid item xs={12} sx={{ p: '25px 0px 0px 25px' }}>
          <Typography
            variant="subtitle1"
            sx={{ color: (t) => t.palette.secondary.main, fontFamily: 'Kanit-Regular' }}
          >
            {semiboldText}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ p: '0px 0px 0px 25px' }}>
          <Typography
            variant="h3"
            sx={{ color: (t) => t.palette.secondary.main, fontFamily: 'Kanit-Regular' }}
          >
            {boldBottomText}
          </Typography>
        </Grid>
        {bottomText && (
          <Grid item xs={12} sx={{ p: '10px 0px 0px 25px' }}>
            <Typography
              variant="body1"
              sx={{ color: (t) => t.palette.secondary.main, fontFamily: 'Kanit-Light' }}
            >
              {bottomText}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
