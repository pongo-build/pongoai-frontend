import * as React from 'react';
import { Icon } from './index';
import { ThemeProvider } from '@mui/material/styles';
import { webLightTheme } from '../../react-theme/src';

export const BasicIconExample = () => {
  return (
    <ThemeProvider theme={webLightTheme}>
      <Icon />
    </ThemeProvider>
  );
};

export default {
  title: 'Components/Icon',
  component: Icon,
};
