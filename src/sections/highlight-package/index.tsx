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
    <Grid container display="flex" justifyContent="center">
      <Grid item xs={12}>
        <Typography
          sx={{ fontSize: 40, fontFamily: 'Prompt-Medium', fontWeight: '600', color: '#28327F' }}
        >
          Pacote em destaque
        </Typography>
      </Grid>
      <Box
        sx={{
          pt: 6,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 2,
          overflowX:'scroll'
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
