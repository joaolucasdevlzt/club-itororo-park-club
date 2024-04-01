import { useNavigate } from 'react-router';
import { format, differenceInDays } from 'date-fns';

import { Box, Grid, Typography } from '@mui/material';

import { HighlightPackagesInterface } from 'src/pages/package-details/static';

import HighlightCard from 'src/components/hightlight-card';

export default function HighlightPackageSection({
  sectionTitle,
  packageList,
}: {
  sectionTitle?: string;
  packageList: HighlightPackagesInterface[];
}) {
  const navigate = useNavigate();
  if (!Array.isArray(packageList) || !packageList.length) {
    return <Box />;
  }
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      {sectionTitle && (
        <Grid item xs={12}>
          <Typography
            variant="h2"
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
        {packageList.map((item, index) => {
          const duration = differenceInDays(new Date(item.returning), new Date(item.departure));
          const formatedDeparture = new Date(item.departure || '2000/01/01');
          const formatedReturning = new Date(item.returning || '2000/01/02');
          console.log(
            `${format(formatedDeparture, 'dd/MM')} à ${format(formatedReturning, 'dd/MM')}`
          );
          const content = [
            { icon: 'sun', text: `${duration + 1} ${duration === 0 ? 'dia' : 'dias'}` },

            { icon: 'plane', text: item.flight },
            {
              icon: 'calendar',
              text: `De ${format(formatedDeparture, 'dd/MM')} à ${format(formatedReturning, 'dd/MM')}`,
            },
            { icon: 'coffee', text: 'Café da manhã incluso' },
          ];
          return (
            <HighlightCard
              fn={() => navigate(`/pacotes/detalhes/${item.id}`)}
              key={item.accomodation}
              width={310}
              image={item.folder[0].publicUrl}
              content={content}
              title={item.location}
              subtitle={item.accomodation}
              semiboldText={item.split}
              boldBottomText={(parseFloat(item.price) - parseFloat(item.upfront)) / 10 || null}
              bottomText={item.upfront}
            />
          );
        })}
      </Box>
    </Grid>
  );
}
