import classNames from 'classnames';
import socialMediaLinks from '~/data/socialMedia';
import NowPlaying from '../NowPlaying/NowPlaying';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={classNames(styles.footer, 'text-light')}>
      <div className="flex flex-start">
        <p className="text-light mr12">/elsewhere</p>
        <ul className="flex">
          {socialMediaLinks.slice(0, 4).map((el) => (
            <li key={el.name}>
              <a
                className="text-light"
                href={`${el.link}/?ref=shubham.sh`}
                target="_blank"
                rel="noreferrer"
                aria-label={el.name}
              >
                <i className={el.icon} />
              </a>
            </li>
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
