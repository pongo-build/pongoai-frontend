import { webLightTokens } from './web/index';
import { Theme } from '../types';
import { fonts } from './font/index';

export const webLightTheme: Theme = {
  palette: {
    ...webLightTokens,
  },
  fonts: {
    ...fonts,
  },
};
