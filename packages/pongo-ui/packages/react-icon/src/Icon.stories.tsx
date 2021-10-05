import * as React from 'react';
import { ChatBubbleIcon } from './index';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '../../react-theme/src';

export const BasicIconExample = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <ChatBubbleIcon />
    </FluentProvider>
  );
};

export default {
  title: 'Components/Icon',
  component: ChatBubbleIcon,
};
