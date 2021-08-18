import React from 'react';

const focusElements = 'button, a, [tabindex]:not([tabindex="-1"])';

function useContainedFocus(ref: React.RefObject<HTMLElement>) {
  const el = React.useRef<{ first?: HTMLElement; last?: HTMLElement }>({});

  // TODO: check the order of focus is correct or not
  const handleCallback = React.useCallback(
    (e: KeyboardEvent) => {
      if (!ref?.current?.contains?.(document.activeElement)) {
        el.current.first?.focus();
      }
      const isTabPressed = e.key === 'Tab';
      if (!isTabPressed) {
        return;
      }
      if (isTabPressed) {
        if (e.shiftKey) {
          if (document.activeElement === el.current.first) {
            el.current.last?.focus();
            e.preventDefault();
          }
        } else if (document.activeElement === el.current.last) {
          el.current.first?.focus();
          e.preventDefault();
        }
      }
    },
    [ref],
  );

  React.useEffect(() => {
    if (!ref.current) return;
    const lastFocusElement = document.activeElement as HTMLElement;
    const elems = ref.current.querySelectorAll(focusElements);
    el.current.first = elems[0] as HTMLElement;
    el.current.last = elems[elems.length - 1] as HTMLElement;
    document.addEventListener('keydown', handleCallback);
    return () => {
      document.removeEventListener('keydown', handleCallback);
      lastFocusElement?.focus?.();
    };
  }, [handleCallback, ref]);
}
export default useContainedFocus;
