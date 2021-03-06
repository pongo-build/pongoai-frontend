import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import type { RatingState } from './Rating.types';

const useRootStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    touchAction: 'none',
    verticalAlign: 'middle',
    width: '120px',
    height: '25px',
    background: 'blue',
    '--rating-star-size': '20px',
  },

  enabled: {
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
}));

const useStarStyles = makeStyles(() => ({
  star: {
    position: 'absolute',
    width: 'var(--rating-star-size)',
    height: 'var(--rating-star-size)',
    transition: 'background .1s cubic-bezier(0.33, 0.0, 0.67, 1)',
    touchAction: 'none',
    pointerEvents: 'none',
    boxSizing: 'border-box',
    background: 'green',
    // ':before': {
    //   position: 'absolute',
    //   top: '0px',
    //   left: '0px',
    //   bottom: '0px',
    //   right: '0px',
    //   content: "''",
    // },
    // ':after': {
    //   position: 'absolute',
    //   top: '0px',
    //   left: '0px',
    //   bottom: '0px',
    //   right: '0px',
    //   content: "''",
    //   opacity: 'var(--switch-checked-opacity)',
    // },
  },

  enabled: {
    ':before': {
      backgroundColor: 'green',
    },
    ':after': {
      backgroundColor: 'red',
    },
  },

  disabled: {
    ':before': {
      backgroundColor: 'green',
    },
    ':after': {
      backgroundColor: 'red',
    },
  },
}));

/**
 * Styles for the hidden input slot
 */
const useInputStyle = makeStyles({
  input: {
    opacity: 0,
    position: 'absolute',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
});

export const useRatingStyles = (state: RatingState) => {
  const rootStyles = useRootStyles();
  const starStyles = useStarStyles();
  const inputStyles = useInputStyle();

  state.root.className = clsx(
    rootStyles.root,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    state.root.className,
  );

  state.star.className = clsx(
    starStyles.star,
    state.disabled ? starStyles.disabled : starStyles.enabled,
    state.star.className,
  );

  state.input.className = clsx(inputStyles.input, state.input.className);

  return state;
};
