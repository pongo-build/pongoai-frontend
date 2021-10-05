import * as React from 'react';
import { Rating } from './index';
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme } from '../../react-theme/src';

export const BasicRatingExample = () => {
  const [ratingValue, setRatingValue] = React.useState(0);

  const onRatingChange = (_ev: React.ChangeEvent<HTMLInputElement>, data: { value: number }) => {
    setRatingValue(data.value);
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <Rating value={ratingValue} onChange={onRatingChange} />
      <h1>{ratingValue}</h1>
    </FluentProvider>
  );
};

export default {
  title: 'Components/Rating',
  component: Rating,
};
