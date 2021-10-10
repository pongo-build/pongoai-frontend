import * as React from 'react';
import { Checkbox } from './index';

export const BasicCheckboxExample = () => {
  return (
    <>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox defaultChecked disabled />
    </>
  );
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};
