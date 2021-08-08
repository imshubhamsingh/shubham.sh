import classNames from 'classnames';

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
      <i className={styles.blink} /> Currently working at{' '}
      <a
        className="text-dark font-medium link"
        target="_blank"
        href="http://smallcase.com/about/?ref=shubham.sh"
        rel="noreferrer"
      >
        <i className="icon-smallcase" /> smallcase
      </a>
    </p>
  );
}

export default CurrentWorkPlace;
