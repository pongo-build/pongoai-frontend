export type Theme = {
  palette: ColorTokens;
  fonts: Fonts;
};

/**
 * Color theme tokens.
 */
export type ColorTokens = {
  brand1: string;
  brand1Hover: string;
  brand1Active: string;
  brand1Stroke: string;
  brand1StrokeHover: string;
  brand1StrokeActive: string;
  neutral1: string;
  neutral1Hover: string;
  neutral1Active: string;
  neutral1Stroke: string;
  neutral1StrokeHover: string;
  neutral1StrokeActive: string;
  neutral2: string;
  neutral2Hover: string;
  neutral2Active: string;
  neutral2Disabled: string;
  neutral2DisabledBackground: string;
};

export type Fonts = {
  fontFamily: FontFamilyTokens;
  fontOpacity: FontOpacityTokens;
  fontSize: FontSizeTokens;
  fontLineHeight: FontLineHeightTokens;
  fontWeight: FontWeightTokens;
};

/**
 * Font family tokens.
 */
export type FontFamilyTokens = {
  base: string;
  monospace: string;
};

/**
 * Font opacity tokens
 */
export type FontOpacityTokens = {
  display: string;
  subHeadline: string;
  body: string;
  caption: string;
  title: string;
  header1: string;
  header2: string;
  header3: string;
};

/**
 * Font size tokens.
 */
export type FontSizeTokens = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
};

/**
 * Font line height tokens.
 */
export type FontLineHeightTokens = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
};

/**
 * Font weight tokens.
 */
export type FontWeightTokens = {
  thin: number;
  light: number;
  regular: number;
  medium: number;
  bold: number;
  black: number;
};
