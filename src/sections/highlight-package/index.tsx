import { Box, Grid, Typography } from '@mui/material';

import HighlightCard from 'src/components/hightlight-card';

import { HighlightPackagesProps } from 'src/types/external/api';

export default function HighlightPackageSection({
  sectionTitle,
  packageList,
}: {
  sectionTitle?: string;
  packageList: HighlightPackagesProps[];
}) {
  if (!Array.isArray(packageList) || !packageList.length) {
    return <Box />;
  }
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      {sectionTitle && (
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: { xs: 30, sm: 40 },
              fontFamily: 'Prompt-Medium',
              fontWeight: '600',
              color: (t) => t.palette.secondary.main,
            }}
          >
            {sectionTitle}
          </Typography>
        </Grid>
      )}
      <Box
        sx={{
          width: '100%',
          pt: 6,
          pb: 3,
          display: 'flex',
          justifyContent: 'flex-start',
          gap: 3,
          overflowX: 'scroll',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '12px',
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#E33149',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#D7DDE0',
            height: '2px',
            borderRadius: '6px',
          },
        }}
      >
        {packageList.map((item, index) => (
          <HighlightCard
            key={item.title + index}
            width={310}
            image={item.image}
            content={item.content}
            title={item.title}
            subtitle={item.subtitle}
            semiboldText={item.semiboldText}
            boldBottomText={item.boldBottomText}
            bottomText={item.bottomText}
          />
        ))}
      </Box>
    </Grid>
  );
}
