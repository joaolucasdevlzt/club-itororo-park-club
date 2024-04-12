import React, { Dispatch, SetStateAction } from 'react';

import { Box, Button, useTheme, useMediaQuery } from '@mui/material';

const inactive = {
  borderRadius: 0,
  justifyContent: 'flex-start',
  pl: 2,
  display: 'flex',
  gap: 1,
  fontFamily: 'Prompt-Thin',
  color: '#8F99A0',
};
const active = {
  borderRadius: 0,
  justifyContent: 'flex-start',
  pl: 2,
  display: 'flex',
  gap: 1,
  fontFamily: 'Prompt-SemiBold',
  color: '#28327F',
};
interface IMenu {
  tabNames: string[];
  setOpen: Dispatch<SetStateAction<boolean>>;
  activeTab: boolean;
}
export default function Menu({ tabNames, activeTab, setOpen }: IMenu) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (isMobile) {
    return (
      <Box
        sx={{
          position: 'relative',
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '3px solid #E5E6EE',
        }}
      >
        <Box
          sx={{
            ml: '-2.5px',
            position: 'absolute',
            transition: '.5s all',
            left: 0,
            ...(!activeTab && { transform: 'translate(0px, 53px)' }),
            height: 35,
            borderRight: '3px solid #28327F',
          }}
        />
        <Button sx={activeTab ? active : inactive} onClick={() => setOpen(true)}>
          {tabNames[0]}
        </Button>
        <Button sx={!activeTab ? active : inactive} onClick={() => setOpen(false)}>
          {tabNames[1]}
        </Button>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
        borderRight: '3px solid #E5E6EE',
      }}
    >
      <Box
        sx={{
          mr: '-2.5px',
          position: 'absolute',
          transition: '.5s all',
          right: 0,
          ...(!activeTab && { transform: 'translate(0px, 53px)' }),
          height: 35,
          borderRight: '3px solid #28327F',
        }}
      />
      <Button sx={activeTab ? active : inactive} onClick={() => setOpen(true)}>
        {tabNames[0]}
      </Button>
      <Button sx={!activeTab ? active : inactive} onClick={() => setOpen(false)}>
        {tabNames[1]}
      </Button>
    </Box>
  );
}
