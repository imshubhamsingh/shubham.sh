import * as React from 'react';

function useOutsideClick(
  ref: React.MutableRefObject<any>,
  callback: () => void,
) {
  const handleClick = (e: MouseEvent) => {
    if (!ref?.current?.contains?.(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}

export default useOutsideClick;
