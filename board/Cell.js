import React from 'react';
import { Polygon } from 'react-native-svg';
import { corners } from './utils';
import {
  cellFillColor, player1Color, player2Color, strokeColor,
} from '../theme';

export const Cell = (props) => {
  const {
    x, y, size, value,
  } = props;
  const points = corners(x, y, size);

  const color = value === 1 ? player1Color : value === 2 ? player2Color : cellFillColor;

  return <Polygon {...props} stroke={strokeColor} fill={color} points={points.map((p) => p.join(',')).join(' ')} />;
};
