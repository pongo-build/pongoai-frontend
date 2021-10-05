import * as React from 'react';
import { Header } from './index';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '../../../../pongo-ui/packages/react-theme/src';

export const BasicHeaderExample = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
    </FluentProvider>
  );
};

export default {
  title: 'Components/Header',
  component: Header,
};
