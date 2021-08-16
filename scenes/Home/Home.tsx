import * as React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Home.module.css';
import CurrentWorkPlace from '~/components/CurrentWorkPlace/CurrentWorkPlace';
import Project from '~/components/Projects/Project';
import HandWave from '~/components/HandWave/HandWave';
import Avatar from '~/components/Avatar/Avatar';
import Signature from '~/components/Signature/Signature';
import Footer from '~/components/Footer/Footer';
import ThemeManager from '~/components/ThemeManager/ThemeManager';
import Intro from '~/components/Intro/Intro';
import Email from '~/components/Email/Email';
import Blogs from '~/components/Blogs/Blogs';

function Home() {
  return (
    <>
      <div className={styles.container} id="main">
        <nav className={classNames('flex-apart', styles.nav)}>
          <Link href="/" passHref>
            <a className={classNames('flex', 'flex-start', styles.home)}>
              <Avatar />
              <div className="ml12">
                <Signature />
                <br />
                <p className="text-light text-16">UI Enthusiast</p>
              </div>
            </a>
          </Link>
          <div className="flex flex-start">
            <div className={styles.webWork}>
              <CurrentWorkPlace />
            </div>
            <ThemeManager />
          </div>
        </nav>
        <main className={styles.main}>
          <section className="text-40">
            <HandWave />
          </section>
          <section className="mb24 text-normal">
            <Intro />
            <section className={styles.infoContainer}>
              <Project />
              <Blogs />
            </section>
          </section>
          <div className={classNames(styles.mwebWork, 'mb16')}>
            <CurrentWorkPlace />
          </div>
          <section className="text-40 inline-block text-center">
            <Email />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
