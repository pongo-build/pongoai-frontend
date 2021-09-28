import * as React from 'react';
import { Rating } from './index';
import { ThemeProvider } from '@mui/material/styles';
import { webLightTheme } from '../../react-theme/src';

export const BasicRatingExample = () => {
  return (
    <ThemeProvider theme={webLightTheme}>
      <Rating />
      asdasd
    </ThemeProvider>
  );
};

export default {
  title: 'Components/Rating',
  component: Rating,
};
