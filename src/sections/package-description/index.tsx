import { Box, Grid, Typography } from '@mui/material';

import { HighlightPackagesInterface } from 'src/pages/package-details/static';

import IconButton from 'src/components/icon-button';
import { differenceInDays, format } from 'date-fns';

export default function PackageDescription({ data }: { data: HighlightPackagesInterface }) {
  const duration = differenceInDays(new Date(data.returning), new Date(data.departure));
  const formatedDeparture = new Date(data.departure || '2000/01/01');
  const formatedReturning = new Date(data.returning || '2000/01/02');
  console.log(`${format(formatedDeparture, 'dd/MM')} à ${format(formatedReturning, 'dd/MM')}`);
  const content = [
    { icon: 'sun', text: `${duration + 1} ${duration === 0 ? 'dia' : 'dias'}` },

    { icon: 'plane', text: data.flight },
    {
      icon: 'calendar',
      text: `De ${format(formatedDeparture, 'dd/MM')} à ${format(formatedReturning, 'dd/MM')}`,
    },
    { icon: 'coffee', text: 'Café da manhã incluso' },
  ];
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: 'Prompt-Regular', color: (t) => t.palette.secondary.main }}
        >
          {data.location}
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: 'Kanit-Regular', color: (t) => t.palette.secondary.main }}
        >
          {data.accomodation}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {content?.map((item, index) => (
          <IconButton
            textSx={{ fontFamily: 'Kanit-Light' }}
            key={item.icon + index}
            icon={<Box component="img" src={`/assets/icons/lazertur/${item.icon}.svg`} />}
            text={item.text}
          />
        ))}
      </Box>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          height: 'auto',
          width: 'auto',
        }}
      >
        {/* {items?.length &&
          items?.map((item: string, index) => (
            <Grid
              item
              sx={{
                gap: 1,
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {index !== 0 && (
                <Box
                  sx={{
                    height: 6,
                    width: 6,
                    borderRadius: 3,
                    backgroundColor: (t) => t.palette.secondary.main,
                  }}
                />
              )}
              <Typography
                sx={{
                  lineBreak: 'strict',
                  fontFamily: 'Kanit-Light',
                  color: (t) => t.palette.secondary.main,
                }}
              >
                {item}
              </Typography>
            </Grid>
          ))} */}
      </Grid>
    </Box>
  );
}
