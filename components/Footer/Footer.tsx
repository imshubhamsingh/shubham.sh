import classNames from 'classnames';
import socialMediaLinks from '~/data/socialMedia';
import NowPlaying from '../NowPlaying/NowPlaying';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={classNames(styles.footer, 'text-light')}>
      <div className="flex flex-start">
        <p className="text-light mr12">/elsewhere</p>
        <ul>
          {socialMediaLinks.slice(0, 4).map((el) => (
            <a
              key={el.name}
              className="text-light"
              href={`${el.link}/?ref=shubham.sh`}
              target="_blank"
              rel="noreferrer"
            >
              <i className={el.icon} />
            </a>
          ))}
        </ul>
      </div>
      <div>
        <NowPlaying />
      </div>
    </footer>
  );
}
export default Footer;
