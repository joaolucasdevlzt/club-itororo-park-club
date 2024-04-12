import React from 'react';

import { Box } from '@mui/material';

import Topics from './topics';
import SimpleAfter from './simple-after';
import { IFaqSingleAnswer } from './data';
import SimpleBefore from './simple-before';

export default function Answer({ singleAnswer }: IFaqSingleAnswer) {
  const { topics, simpleBefore, simpleAfter } = singleAnswer;
  return (
    <Box>
      {simpleBefore && <SimpleBefore list={simpleBefore} />}
      {topics && <Topics list={topics} />}
      {simpleAfter && <SimpleAfter list={simpleAfter} />}
    </Box>
  );
}
