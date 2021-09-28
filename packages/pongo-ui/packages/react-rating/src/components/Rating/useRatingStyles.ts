import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import type { RatingState } from './Rating.types';

export const useStyles = makeStyles((theme: any) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

export const useRatingStyles = (state: RatingState) => {
  const ratingStyles = useStyles();

  state.root.className = clsx(ratingStyles.root, state.root.className);

  return state;
};
