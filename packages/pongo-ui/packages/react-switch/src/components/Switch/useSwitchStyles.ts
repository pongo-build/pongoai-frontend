import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { SwitchState } from '@fluentui/react-switch';
import { Theme } from '@pongoai/react-theme';

const rootClassName = 'pongoai-Switch-root';
const trackClassName = 'pongoai-Switch-track';
const thumbClassName = 'pongoai-Switch-thumb';
const inputClassName = 'pongoai-Switch-input';

const useRootStyles = makeStyles({
  root: {
    '--switch-width': '42px',
    '--switch-height': '26px',
    '--switch-thumb-size': '20px',
    '--switch-checked-opacity': '0',
    '--switch-unchecked-opacity': '0',

    position: 'relative',
    width: 'var(--switch-width)',
    height: 'var(--switch-height)',
    display: 'inline-block',
    userSelect: 'none',
    touchAction: 'none',
    verticalAlign: 'bottom',
  },

  unchecked: (theme: Theme) => ({
    ':hover .pongoai-Switch-thumb': {
      ':before': {
        background: theme.palette.neutral3Hover,
      },
    },

    ':hover .pongoai-Switch-track': {
      ':before': {
        borderColor: theme.palette.neutral3Hover,
      },
    },

    ':active .pongoai-Switch-thumb': {
      ':before': {
        background: theme.palette.neutral3Active,
      },
    },

    ':active .pongoai-Switch-track': {
      ':before': {
        borderColor: theme.palette.neutral3Active,
      },
    },
  }),

  checked: (theme: Theme) => ({
    ':hover .pongoai-Switch-track': {
      ':after': {
        background: theme.palette.brand1Hover,
      },
    },

    ':active .pongoai-Switch-track': {
      ':after': {
        background: theme.palette.brand1Active,
      },
    },
  }),

  enabled: {
    '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

const useTrackStyles = makeStyles({
  track: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'background .1s cubic-bezier(0.33, 0.0, 0.67, 1)',
    touchAction: 'none',
    pointerEvents: 'none',

    ':before': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      boxSizing: 'border-box',
      borderRadius: '999px',
      content: "''",
      opacity: 'var(--switch-unchecked-opacity)',
    },

    ':after': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      boxSizing: 'border-box',
      borderRadius: '999px',
      content: "''",
      opacity: 'var(--switch-checked-opacity)',
    },
  },

  unchecked: (theme: Theme) => ({
    ':before': {
      border: `1px solid ${theme.palette.neutral3}`,
      background: 'none',
    },
  }),

  checked: (theme: Theme) => ({
    ':after': {
      background: theme.palette.brand1,
      border: 'none',
    },
  }),

  disabledUnchecked: (theme: Theme) => ({
    ':before': {
      border: `1px solid ${theme.palette.neutral2Disabled}`,
    },
  }),

  disabledChecked: (theme: Theme) => ({
    ':after': {
      border: `1px solid ${theme.palette.neutral2Disabled}`,
      background: theme.palette.neutral2Disabled,
    },
  }),
});

const useThumbWrapperStyles = makeStyles({
  thumbWrapper: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: 'calc(var(--switch-thumb-size) * .7)',
    right: 'calc(var(--switch-thumb-size) * .7)',
    touchAction: 'none',
    pointerEvents: 'none',
  },
});

const useThumbStyles = makeStyles({
  thumb: {
    position: 'absolute',
    width: 'var(--switch-thumb-size)',
    height: 'var(--switch-thumb-size)',
    boxSizing: 'border-box',
    borderRadius: '100%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'background .1s cubic-bezier(0.33, 0.0, 0.67, 1)',
    touchAction: 'none',
    pointerEvents: 'none',

    ':before': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      borderRadius: '100%',
      content: "''",
      opacity: 'var(--switch-unchecked-opacity)',
    },

    ':after': {
      position: 'absolute',
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      borderRadius: '100%',
      content: "''",
      opacity: 'var(--switch-checked-opacity)',
    },
  },

  unchecked: (theme: Theme) => ({
    ':before': {
      background: theme.palette.neutral3,
    },
  }),

  checked: (theme: Theme) => ({
    ':after': {
      background: theme.palette.neutral2,
    },
  }),

  disabledUnchecked: (theme: Theme) => ({
    ':before': {
      border: `1px solid ${theme.palette.neutral2Disabled}`,
      background: theme.palette.neutral2Disabled,
    },
  }),

  disabledChecked: (theme: Theme) => ({
    ':after': {
      background: theme.palette.neutral2,
    },
  }),
});

const useActiveRailStyles = makeStyles({
  activeRail: {
    position: 'absolute',
    left: 'calc(var(--switch-thumb-size) * .7)',
    right: 'calc(var(--switch-thumb-size) * .7)',
  },
});

const useInputStyle = makeStyles({
  input: {
    opacity: 0,
    position: 'absolute',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    touchAction: 'none',
    pointerEvents: 'none',
  },
});

export const useSwitchStyles = (state: SwitchState) => {
  const { checked, disabled } = state.input;

  const rootStyles = useRootStyles();
  const trackStyles = useTrackStyles();
  const thumbWrapperStyles = useThumbWrapperStyles();
  const thumbStyles = useThumbStyles();
  const activeRailStyles = useActiveRailStyles();
  const inputStyles = useInputStyle();

  state.root.className = mergeClasses(
    rootClassName + (checked ? ' checked' : ''),
    rootStyles.root,
    !disabled && rootStyles.checked,
    !disabled && rootStyles.unchecked,
    disabled ? rootStyles.disabled : rootStyles.enabled,
    state.root.className,
  );

  state.track.className = mergeClasses(
    trackClassName,
    trackStyles.track,
    !disabled && trackStyles.checked,
    !disabled && trackStyles.unchecked,
    disabled && trackStyles.disabledChecked,
    disabled && trackStyles.disabledUnchecked,
    state.track.className,
  );

  state.thumbWrapper.className = mergeClasses(thumbWrapperStyles.thumbWrapper, state.thumbWrapper.className);

  state.thumb.className = mergeClasses(
    thumbClassName,
    thumbStyles.thumb,
    !disabled && thumbStyles.checked,
    !disabled && thumbStyles.unchecked,
    disabled && thumbStyles.disabledChecked,
    disabled && thumbStyles.disabledUnchecked,
    state.thumb.className,
  );

  state.activeRail.className = mergeClasses(activeRailStyles.activeRail, state.activeRail.className);

  state.input.className = mergeClasses(inputClassName, inputStyles.input, state.input.className);

  return state;
};
