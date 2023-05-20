import classNames from 'classnames';
import Headout from './Headout/Headout';

import styles from './CurrentWorkPlace.module.css';

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
      <i className={styles.blink} /> Currently working at <Headout />
    </p>
  );
}

export default CurrentWorkPlace;
