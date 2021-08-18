import classNames from 'classnames';
import styles from './Markdown.module.css';

interface IMarkdown {
  html: string;
  className?: string;
}

function Markdown({ html = '', className }: IMarkdown) {
  return (
    <div
      className={classNames(styles.md, className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default Markdown;
