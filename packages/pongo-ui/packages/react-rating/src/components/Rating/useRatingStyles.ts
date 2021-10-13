import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { RatingState } from './Rating.types';

const useRootStyles = makeStyles({
  root: {
    '--rating-star-size': '45px',
    position: 'relative',
    display: 'inline-flex',
    userSelect: 'none',
    touchAction: 'none',
    verticalAlign: 'bottom',
    width: '270px',
    height: 'var(--rating-star-size)',
    flexDirection: 'column',
  },
});

const useStarStyles = makeStyles({
  star: {
    position: 'relative',
    display: 'grid',
    outline: 'none',
    whiteSpace: 'nowrap',
    gridTemplateColumns: '0% 25% 25% 25% 25%',
    marginLeft: 'calc(var(--rating-star-size) / 2)',
    marginRight: 'calc(var(--rating-star-size) / 2)',

    '> span': {
      display: 'flex',
      flexDirection: 'column',
      transform: 'translateX(50%)',
      alignItems: 'center',
      ':hover': {
        width: '500px',
      },
      '> svg': {
        width: '45px',
        height: '45px',
        strokeWidth: '3',
      },
    },
  },
});

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

  enabled: {
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

export const useRatingStyles = (state: RatingState) => {
  const rootStyles = useRootStyles();
  const starWrapperStyles = useStarStyles();
  const inputStyles = useInputStyle();

  state.root.className = mergeClasses(rootStyles.root, state.root.className);

  state.starWrapper.className = mergeClasses(
    starWrapperStyles.star,
    state.disabled ? starWrapperStyles.disabled : starWrapperStyles.enabled,
    state.starWrapper.className,
  );

  state.input.className = mergeClasses(
    inputStyles.input,
    state.disabled ? inputStyles.disabled : inputStyles.enabled,
    state.input.className,
  );

  return state;
};
