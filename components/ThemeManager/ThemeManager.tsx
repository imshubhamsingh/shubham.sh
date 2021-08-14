import * as React from 'react';
import { useTheme } from 'next-themes';

import styles from './ThemeManager.module.css';
import classNames from 'classnames';

function ThemeManager() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), []);

  return (
    <button
      className={classNames(
        'ml12',
        'btn',
        'pointer',
        'relative',
        styles.toggle,
      )}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && <>{resolvedTheme === 'dark' ? <>🌞</> : <>🌚</>}</>}
    </button>
  );
}

export default ThemeManager;
