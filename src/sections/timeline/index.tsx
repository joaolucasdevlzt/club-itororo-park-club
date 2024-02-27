import { Timeline, timelineItemClasses } from '@mui/lab';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import SimpleImage from 'src/components/simple-image';
import TimelineCustomItem from 'src/components/timeline-item';
import { firstTimelineItems, secondTimelineItems } from 'src/pages/about/mock';

export default function TimelineSection() {
  const theme = useTheme();
  const downLg = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Grid
      container
      sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}
    >
      <Grid item xs={12} lg={6}>
        <SimpleImage
          sx={{ backgroundPosition: 'bottom', ml: { xs: 2, lg: 0 } }}
          aspectRatio={downLg ? '10/5' : '10/7.5'}
          image="/assets/images/lazertur/about/lazertur_plane.svg"
        />
      </Grid>
      <Grid item xs={12} lg={6} sx={{ marginTop: { xs: 5, lg: 0 } }}>
        <Timeline
          sx={{
            height: '100%',
            m: 0,
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {firstTimelineItems.map((timelineItem) => (
            <TimelineCustomItem time={timelineItem.time} text={timelineItem.text} />
          ))}
        </Timeline>
      </Grid>
      <Grid container item sx={{ pt: { xs: 5, md: 10 }, flexDirection: { lg: 'row-reverse' } }}>
        <Grid item xs={12} lg={6}>
          <SimpleImage
            sx={{ backgroundPosition: 'top', ml: { xs: 2, lg: 0 } }}
            aspectRatio={downLg ? '10/7' : '10/7.5'}
            image="/assets/images/lazertur/about/nilson-lucas.svg"
          />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ marginTop: { xs: 5, md: 10, lg: 0 } }}>
          <Timeline
            sx={{
              height: '100%',
              m: 0,
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {secondTimelineItems.map((timelineItem) => (
              <TimelineCustomItem time={timelineItem.time} text={timelineItem.text} />
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Grid>
  );
}
