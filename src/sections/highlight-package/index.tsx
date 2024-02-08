import { Box, Grid, Typography } from '@mui/material';

import HighlightCard from 'src/components/hightlight-card';

import { HighlightPackagesProps } from 'src/types/external/api';

export default function HighlightPackageSection({
  packageList,
}: {
  packageList: HighlightPackagesProps[];
}) {
  if (!Array.isArray(packageList) || !packageList.length) {
    return <Box />;
  }
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center', pl: { xs: 3, md: 0 } }}>
      <Grid item xs={12}>
        <Typography
          sx={{ fontSize: 40, fontFamily: 'Prompt-Medium', fontWeight: '600', color: '#28327F' }}
        >
          Pacote em destaque
        </Typography>
      </Grid>
      <Box
        sx={{
          width: '100%',
          pt: 6,
          pb: 6,
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
