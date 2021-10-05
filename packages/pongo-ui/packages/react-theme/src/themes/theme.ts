import { webLightTokens } from './web/index';
import type { Theme } from '../types';
import { fonts } from './font/index';

export const webLightTheme: Theme & any = {
  palette: {
    ...webLightTokens,
  },
  fonts: {
    ...fonts,
  },
};
