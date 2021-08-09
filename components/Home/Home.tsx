import * as React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { annotate } from 'rough-notation';

import styles from './Home.module.css';
import CurrentWorkPlace from '../CurrentWorkPlace/CurrentWorkPlace';
import Project from '../Projects/Project';
import HandWave from '../HandWave/HandWave';
import Avatar from '../Avatar/Avatar';
import Signature from '../Signature/Signature';
import Footer from '../Footer/Footer';

function Home() {
  const ref = React.useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    setTimeout(() => {
      const annotation = annotate(ref.current as HTMLSpanElement, {
        type: 'highlight',
        multiline: true,
        color: '#805de13b',
      });
      annotation.show();
    }, 700);
  }, []);
  return (
    <div className={styles.container}>
      <nav className={classNames('flex-apart', styles.nav)}>
        <Link href="/" passHref>
          <a className={classNames('flex', 'flex-start', styles.home)}>
            <Avatar />
            <p className="ml12 text-16">
              <span className="text-dark">
                <Signature />
              </span>
              <br />
              <span className="text-light">UI Enthusiast</span>
            </p>
          </a>
        </Link>
        <div className={styles.webWork}>
          <CurrentWorkPlace />
        </div>
      </nav>
      <main className={styles.main}>
        <section className="text-40">
          <HandWave />
        </section>
        <section className="mb24">
          <p className="text-20 mb12">
            Hi! I&apos;m Shubham. Looks like you’ve made it to my corner of the
            internet.
          </p>
          <h1 className="text-40 font-normal mb12">
            I am a design-minded software developer with a{' '}
            <span ref={ref}>strong focus on interfaces and experiences</span>{' '}
            working remotely from India.
          </h1>
          <p className="text-20">
            I like to work on open-source projects, and have created a number of
            projects.
          </p>
          <Project />
        </section>
        <div className={classNames(styles.mwebWork, 'mb16')}>
          <CurrentWorkPlace />
        </div>
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
            target="_blank"
            rel="noreferrer"
          >
            say <span className="text-purple">hello@shubham.sh</span>
          </a>
          <p className="text-light text-16">Feel free to reach out to me! 👨‍💻</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
