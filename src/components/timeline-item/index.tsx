import { Typography } from '@mui/material';
import TimelineItem from '@mui/lab/TimelineItem';
import { TimelineDot, TimelineContent, TimelineConnector, TimelineSeparator } from '@mui/lab';

interface TimelineCustomItemProps {
  time: number;
  text: string;
}
export default function TimelineCustomItem({ time, text }: TimelineCustomItemProps) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot sx={{ backgroundColor: (t) => t.palette.primary.main, m: 0, p: 0.3 }} />
        <TimelineConnector sx={{ backgroundColor: (t) => t.palette.primary.main }} />
      </TimelineSeparator>
      <TimelineContent sx={{ mt: -2 }}>
        <Typography
          sx={{
            fontSize: '26px',

            fontFamily: 'Prompt-SemiBold',
            color: (t) => t.palette.primary.main,
          }}
        >
          {time}
        </Typography>
        <Typography
          sx={{
            mb: 2,
            fontSize: '18px',
            lineHeight: 1.3,
            fontFamily: 'Kanit-Light',
            color: (t) => t.palette.secondary.main,
          }}
        >
          {text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
