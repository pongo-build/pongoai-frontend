import * as React from 'react';
import { ChatBubbleIcon } from './index';
import { ThemeProvider } from '@mui/material/styles';
import { webLightTheme } from '../../react-theme/src';

export const BasicIconExample = () => {
  return (
    <ThemeProvider theme={webLightTheme}>
      <ChatBubbleIcon />
    </ThemeProvider>
  );
};

export default {
  title: 'Components/Icon',
  component: ChatBubbleIcon,
};
