import { useEventCallback } from '@fluentui/react-utilities';
import type { ButtonState } from './Button.types';

export const useButtonState = (state: ButtonState): ButtonState => {
  const { disabled } = state;
  const { as, tabIndex, role, onClick, onKeyDown, onKeyUp } = state.root;

  /**
   * Button event callback for when the root is not rendered as a button (EX: anchor).
   */
  const onButtonClick = useEventCallback((ev: any) => {
    if (!disabled && !ev.isDefaultPrevented()) {
      onClick?.(ev);
    } else {
      ev.preventDefault();
      ev.stopPropagation();
    }
  });

  /**
   * Button event callback for when the root is not rendered as a button (EX: anchor).
   */
  const onButtonKeydown = useEventCallback((ev: any) => {
    if (!disabled && !ev.isDefaultPrevented()) {
      onKeyDown?.(ev);
      switch (ev.key) {
        case 'Enter':
          ev.preventDefault();
          ev.currentTarget.click();
          break;
        case 'Space':
          ev.preventDefault();
          break;
        default:
      }
    } else {
      ev.preventDefault();
      ev.stopPropagation();
    }
  });

  /**
   * Button event callback for when the root is not rendered as a button (EX: anchor).
   */
  const onButtonKeyup = useEventCallback((ev: any) => {
    if (!disabled && !ev.isDefaultPrevented()) {
      onKeyUp?.(ev);
      switch (ev.key) {
        case 'Enter':
          ev.preventDefault();
          ev.currentTarget.click();
          break;
        case 'Space':
          ev.preventDefault();
          break;
        default:
      }
    } else {
      ev.preventDefault();
      ev.stopPropagation();
    }
  });

  // If the button is rendered as an anchor or other element apply these props:
  if (as !== 'button') {
    state.root['aria-disabled'] = disabled;
    state.root.onClick = onButtonClick;
    state.root.onKeyDown = onButtonKeydown;
    state.root.onKeyUp = onButtonKeyup;
    state.root.role = role ?? 'button';
    state.root.tabIndex = disabled ? undefined : tabIndex ?? 0;
  }
  // Otherwise if it is a button:
  else {
    state.root.disabled = disabled;
  }

  return state;
};
