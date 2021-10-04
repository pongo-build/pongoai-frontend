import * as React from 'react';
import { Header } from './index';
import { ThemeProvider } from '@mui/styles';
import { webLightTheme } from '../../../../pongo-ui/packages/react-theme/src';

export const BasicHeaderExample = () => {
  return (
    <ThemeProvider theme={webLightTheme}>
      <Header />
    </ThemeProvider>
  );
};

export default {
  title: 'Components/Header',
  component: Header,
};
