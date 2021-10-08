import * as React from 'react';
import { Rating } from './index';

export const BasicRatingExample = () => {
  const [ratingValue, setRatingValue] = React.useState(0);

  const onRatingChange = (_ev: React.ChangeEvent<HTMLInputElement>, data: { value: number }) => {
    setRatingValue(data.value);
  };

  return (
    <div>
      <Rating value={ratingValue} onChange={onRatingChange} />
      <h1>{ratingValue}</h1>
    </div>
  );
};

export default {
  title: 'Components/Rating',
  component: Rating,
};
