import classNames from 'classnames';
import styles from './Tags.module.css';

function Tags({ tags = [], className = '' }) {
  if (!tags.length) {
    return null;
  }
  return (
    <section className={classNames(styles.scroll, className)}>
      {tags.map((el: string) => (
        <span
          className={classNames(styles.tag, 'mr12', 'text-normal')}
          key={el}
        >
          {el}
        </span>
      ))}
    </section>
  );
}

export default Tags;
