import * as React from 'react';
import { ChatBubbleIcon } from './index';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '@pongoai/react-theme';

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
