import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import type { ButtonState } from './Button.types';

const useRootStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    minWidth: '60px',
    minHeight: '35px',
    transition: 'background 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    outline: 'none',

    '&:focus-visible': {
      '&:after': {
        content: "''",
        position: 'absolute',
        top: '-6px',
        right: '-6px',
        bottom: '-6px',
        left: '-6px',
        boxSizing: 'border-box',
        border: '1px solid black',
        borderRadius: '2px',
      },
    },
  },

  enabled: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    },
    '&:active': {
      boxShadow: 'none',
    },
  },

  disabled: {
    cursor: 'not-allowed',
  },

  outline: {
    border: '2px solid #949595',
    background: '#fafafa',
    color: '#333333',

    '&:hover': {
      borderColor: '#636364',
    },
    '&:active': {
      background: '#e5e5e5',
      borderColor: '#5c5c5c',
    },
  },

  outlineDisabled: {
    border: '2px solid #c3c3c3',
    background: '#fafafa',
    color: '#c3c3c3',
  },

  primary: {
    border: '2px solid #354082',
    background: '#586bd9',
    color: 'white',

    '&:hover': {
      background: '#5164b8',
      borderColor: '#313c6e',
    },
    '&:active': {
      background: '#4a5598',
      borderColor: '#1e223d',
    },
  },

  primaryDisabled: {
    border: '2px solid #c3c3c3',
    background: '#fafafa',
    color: '#c3c3c3',
  },

  subtle: {
    border: 'none',
    background: 'none',
    color: '#333333',

    '&:hover': {
      background: '#f7f8f9',
    },
    '&:active': {
      background: '#e5e5e5',
    },
  },

  subtleDisabled: {
    border: 'none',
    background: 'none',
    color: '#d1d1d1',
  },

  transparent: {
    border: 'none',
    background: 'none',
    color: '#333333',
    '&:hover': {
      color: '#5164b8',
      boxShadow: 'none',
    },
    '&:active': {
      color: '#354082',
    },
  },

  transparentDisabled: {
    border: 'none',
    background: 'none',
    color: '#d1d1d1',
  },

  rounded: {
    borderRadius: '6px',
  },

  circular: {
    minWidth: '38px',
    minHeight: '38px',
    borderRadius: '100%',
  },

  square: {
    borderRadius: '0px',
  },
}));

export const useButtonStyles = (state: ButtonState) => {
  const rootStyles = useRootStyles();

  state.root.className = clsx(
    rootStyles.root,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    state.disabled
      ? rootStyles[
          (state.appearance! + 'Disabled') as
            | 'outlineDisabled'
            | 'primaryDisabled'
            | 'subtleDisabled'
            | 'transparentDisabled'
        ]
      : rootStyles[state.appearance!],
    rootStyles[state.shape!],
    state.root.className,
  );

  return state;
};
