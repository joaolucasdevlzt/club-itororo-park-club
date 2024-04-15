import { Box, Typography } from '@mui/material';

export default function Topics({ list }: { list: any[] }) {
  return (
    <Box>
      {list.map((item) => {
        const { bold, text } = item;
        return (
          <Box
            key={text}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: 2,
            }}
          >
            {!bold && (
              <Box
                sx={{
                  minWidth: 5,
                  width: 5,
                  height: 5,
                  marginRight: 1,
                  marginLeft: 1,
                  borderRadius: 2.5,
                  backgroundColor: (t) => t.palette.secondary.main,
                }}
              />
            )}
            <Typography
              sx={{
                fontFamily: 'Kanit-Light',
                color: (t) => t.palette.secondary.main,
              }}
            >
              <strong
                style={{
                  marginRight: bold && 1,
                  fontFamily: 'Kanit-SemiBold',
                }}
              >
                {bold}
              </strong>

              {text}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
