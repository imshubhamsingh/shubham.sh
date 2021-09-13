import classNames from 'classnames';

import styles from './CurrentWorkPlace.module.css';
import Vimeo from './Vimeo';

interface ICurrentWorkPlace {
  className?: string;
}

function CurrentWorkPlace({ className }: ICurrentWorkPlace) {
  return (
    <p
      className={classNames(
        'text-light',
        'relative',
        styles.working,
        className,
      )}
    >
      <i className={styles.blink} /> Currently working at <Vimeo />
    </p>
  );
}

export default CurrentWorkPlace;
