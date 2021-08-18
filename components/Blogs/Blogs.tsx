import classNames from 'classnames';
import blogList from '~/data/blog';

import styles from './Blogs.module.css';

function Blogs() {
  return (
    <div className="flex flex-start-top">
      <div>
        <p className={classNames('text-dark', styles.info)}>
          Dive in and learn something new!
        </p>
        <div className="text-light">
          {blogList.map((el) => (
            <p className="text-14" key={el.name}>
              <a
                className={classNames('link', styles.link)}
                href={`${el.link}/?ref=shubham.sh`}
                target="_blank"
                rel="noreferrer"
              >
                {el.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
