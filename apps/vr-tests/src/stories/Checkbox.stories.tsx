import * as React from 'react';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';
import { Checkbox } from '../../../../packages/pongo-ui/packages/react-checkbox/src/index';

export const BasicCheckboxExample = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox defaultChecked disabled />
    </FluentProvider>
  );
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};
