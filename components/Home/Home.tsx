import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { annotate } from 'rough-notation';

import profilePic from '~/public/shubham_avatar.png';

import styles from './Home.module.css';

function Home() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      const annotation = annotate(ref.current, { type: 'underline' });
      annotation.show();
    }, 200);
  }, []);
  return (
    <div className={styles.container}>
      <nav className={classNames('flex-apart', styles.nav)}>
        <div className="flex flex-start">
          <Image
            src={profilePic}
            alt="Shubham Singh"
            height={50}
            width={50}
            className="avatar"
          />
          <p className="ml12 text-16">
            <span className="text-dark">Shubham Singh</span>
            <br />
            <span className="text-light">UI Enthusiast</span>
          </p>
        </div>
        <div>
          <p className={classNames('text-light', 'relative', styles.working)}>
            Currently working at{' '}
            <a
              className="text-dark font-medium link"
              target="_blank"
              href="http://smallcase.com/"
              rel="noreferrer"
            >
              smallcase
            </a>
          </p>
        </div>
      </nav>
      <main className={styles.main}>
        <section className="text-40">👋</section>
        <section className="mb24">
          <p className="text-20 mb12">
            Hi! Looks like you’ve made it to my corner of the internet.
          </p>
          <p className="text-40">
            I am a front-end engineer with a <span ref={ref}>strong focus</span>
            on interfaces and experiences working remotely from India.
          </p>
        </section>
        <section className="text-40 inline-block text-center">
          <a
            className={classNames(
              'btn',
              'text-light',
              'text-28',
              'mb12',
              styles.btnMail,
            )}
            href="mailto:hello@shubham.sh"
          >
            Say <span className="text-purple">hello@shubham.sh</span>
          </a>
          <p className="text-light text-16">Feel free to reach out to me! 👨‍💻</p>
        </section>
      </main>
      <footer className={classNames(styles.footer, 'text-light')}>
        <p className="text-light mr12">/Elsewhere</p>
        <ul>
          <i className="icon-codepen" />
          <i className="icon-twitter" />
          <i className="icon-linkedin" />
          <i className="icon-github" />
          <i className="icon-spotify" />
        </ul>
      </footer>
    </div>
  );
}

export default Home;
