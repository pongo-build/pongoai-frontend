import * as React from 'react';
import { FluentProvider } from '@fluentui/react-provider';
import { ChatBubbleIcon } from '@pongoai/react-icon';
import { webLightTheme } from '@pongoai/react-theme';

export const BasicIconExample = () => (
  <FluentProvider theme={webLightTheme}>
    <ChatBubbleIcon />
  </FluentProvider>
);

export default {
  title: 'Components/Icon',
  component: ChatBubbleIcon,
};
