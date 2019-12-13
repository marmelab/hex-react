import React from 'react';
import { Button } from 'react-native';

import { trainingMenuColor } from '../theme';

// @todo: Refactor Menu and mode selection to improve readiness
// https://reactnavigation.org/docs/en/stack-navigator.html#params
export const TrainingButton = ({ navigation }) => (
  <Button
    title="Training mode"
    color={trainingMenuColor}
    onPress={() => {
      navigation.navigate('Training');
    }}g
  />
);
