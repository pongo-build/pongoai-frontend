import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { CheckboxState } from './Checkbox.types';
import { Theme } from '@pongoai/react-theme';

const indicatorClassName = 'pongoai-Checkbox-indicator';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    width: '34px',
    height: '34px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    verticalAlign: 'middle',
  },

  checked: (theme: Theme) => ({
    ':hover .pongoai-Checkbox-indicator': {
      background: theme.palette.brand1Hover,
      '> svg': {
        opacity: '.9',
      },
    },

    ':active .pongoai-Checkbox-indicator': {
      background: theme.palette.brand1Active,
      '> svg': {
        opacity: '.8',
      },
    },
  }),

  unchecked: (theme: Theme) => ({
    ':hover .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.neutral3Hover,
    },

    ':active .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.neutral3Active,
    },
  }),
});

const useIndicatorStyles = makeStyles({
  indicator: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    boxSizing: 'border-box',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transition: 'background 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    '> svg': {
      position: 'absolute',
      width: '16px',
      height: '16px',
    },
  },

  checked: (theme: Theme) => ({
    background: theme.palette.brand1,

    '> svg': {
      opacity: '1',
      fill: 'white',
    },
  }),

  unchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.neutral3}`,

    '> svg': {
      opacity: '0',
    },
  }),

  disabledChecked: (theme: Theme) => ({
    background: theme.palette.neutral2Disabled,

    '> svg': {
      opacity: '1',
      fill: 'white',
    },
  }),

  disabledUnchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.neutral2Disabled}`,

    '> svg': {
      opacity: '0',
    },
  }),
});

const useInputStyles = makeStyles({
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

export const useCheckboxStyles = (state: CheckboxState) => {
  const rootStyles = useRootStyles();
  const indicatorStyle = useIndicatorStyles();
  const inputStyles = useInputStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    !state.disabled && (state.input.checked ? rootStyles.checked : rootStyles.unchecked),
    state.root.className,
  );

  state.indicator.className = mergeClasses(
    indicatorClassName,
    indicatorStyle.indicator,
    !state.disabled && (state.input.checked ? indicatorStyle.checked : indicatorStyle.unchecked),
    state.disabled && (state.input.checked ? indicatorStyle.disabledChecked : indicatorStyle.disabledUnchecked),
    state.indicator.className,
  );

  state.input.className = mergeClasses(
    inputStyles.input,
    state.disabled ? inputStyles.disabled : inputStyles.enabled,
    state.input.className,
  );

  return state;
};
