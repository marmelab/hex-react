import React from 'react';

import { Board } from '../board';

export const TwoPlayerScreen = () => {
  const size = 6;
  return <Board size={size} mode="local" />;
};
