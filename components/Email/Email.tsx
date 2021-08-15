import classNames from 'classnames';
import styles from './Email.module.css';

function Email() {
  return (
    <>
      <a
        className={classNames(
          'btn',
          'text-light',
          'text-28',
          'mb12',
          'custom-focus',
          styles.btnMail,
        )}
        href="mailto:hello@shubham.sh"
        target="_blank"
        rel="noreferrer"
      >
        say <span className={styles.email}>hello@shubham.sh</span>
      </a>
      <p className="text-light text-16">Feel free to reach out to me! 👨‍💻</p>
    </>
  );
}

export default Email;
