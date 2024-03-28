import { Box, Grid } from '@mui/material';

import { HighlightPackagesInterface } from 'src/pages/package-details/static';

import IconButton from 'src/components/icon-button';

import PriceCard from '../price-card';
import ImageSection from '../image-list';
import PackageDescription from '../package-description';

export default function CompletePackageInfo({ data }: { data: HighlightPackagesInterface }) {

  
  return (
    <Grid
      container
      sx={{
        gap: { xs: 5, md: 0 },
      }}
    >
      <Grid item xs={12}>
        <Box sx={{ marginBottom: { xs: 0, md: 5 } }}>
          <IconButton
            iconSx={{ color: (t: any) => t.palette.secondary.main }}
            callback={() => window.history.back()}
            icon="gravity-ui:chevron-left"
            text="Voltar para home"
            direction="left"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {data?.folder?.length && <ImageSection images={data.folder} />}
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          paddingLeft: 2,
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <PackageDescription data={data} />
        <PriceCard
          data={{
            price: parseFloat(data.price),
            oldPrice: parseFloat(data.oldPrice),
            descriptionText: 'Valor por pessoa',
            upfront: data.upfront,
            split: data.split,
            splitValue: parseFloat(data.price) - parseFloat(data.upfront),
          }}
        />
      </Grid>
    </Grid>
  );
}
