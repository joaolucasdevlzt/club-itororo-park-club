import { Box, Grid, Typography } from '@mui/material';

import IconButton from 'src/components/icon-button';

import { PackageDescriptionProps } from 'src/types/external/api';

export default function PackageDescription({ data }: { data: PackageDescriptionProps }) {
  const { items } = data;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: 'Kanit-Regular', color: (t) => t.palette.secondary.main }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: 'Kanit-Regular', color: (t) => t.palette.secondary.main }}
        >
          {data.subtitle}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {data.content?.map((content, index) => (
          <IconButton
            textSx={{ fontFamily: 'Kanit-Light' }}
            key={content.icon + index}
            icon={<Box component="img" src={`/assets/icons/lazertur/${content.icon}.svg`} />}
            text={content.text}
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
        {items?.length &&
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
          ))}
      </Grid>
    </Box>
  );
}
