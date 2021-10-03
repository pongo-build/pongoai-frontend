import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { webLightTheme } from './index';

export const WebLightModeExample = () => {
  return (
    <ThemeProvider theme={webLightTheme}>
      <h1>Theme test</h1>
    </ThemeProvider>
  );
};

export default {
  title: 'Theme',
};
