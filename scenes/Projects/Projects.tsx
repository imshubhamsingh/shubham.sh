import * as React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Markdown from '~/components/Markdown/Markdown';
import { useRouter } from 'next/dist/client/router';
import Modal from '~/components/Modal/Modal';

import styles from './Projects.module.css';

//@ts-ignore
function Projects({ meta, content }) {
  const router = useRouter();
  const bodyRef = React.useRef<HTMLDivElement>(null);
  if (process.browser) {
    //@ts-ignore
    bodyRef.current = document.getElementById?.('main');
  }
  function onClose() {
    router.push('/', undefined, { scroll: false });
  }
  if (!meta) return null;

  console.log(meta);
  return (
    <Modal bodyRef={bodyRef} onClose={onClose}>
      <div>
        <section
          className={classNames('flex', 'flex-start-top', styles.shortInfo)}
        >
          <div className={classNames(styles.image, 'mr16')}>
            <figure>
              <Image
                src={require(`~/public/projects/${meta.icon}.png`)}
                alt="Shubham Singh"
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </div>
          <div>
            <p className="text-dark font-medium text-16">{meta.title}</p>
            <p className="text-14 text-light">{meta.excerpt}</p>
          </div>
        </section>
        <div>
          <hr
            role="separator"
            aria-orientation="horizontal"
            className={styles.hr}
          />
        </div>
        <p className="text-light text-12 mb12 ml24">TECH</p>
        <div className={classNames(styles.scroll, 'mb24')}>
          {(meta.tags || []).map((el: string) => (
            <span
              className={classNames(styles.tag, 'mr12', 'text-normal')}
              key={el}
            >
              {el}
            </span>
          ))}
        </div>
        <Markdown className={styles.main} html={content} />
        <div className={classNames(styles.main, 'mb12')}>
          <a
            href={`${meta.link}?ref=shubham.sh`}
            className={classNames(
              'btn',
              'flex-center',
              'pointer',
              'custom-focus',
              styles.btn,
            )}
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
        </div>
        {/* <ul className={classNames(styles.externalLinks, 'flex')}>
          {Object.entries(meta.others).map(([key, value]) => (
            <li key={key}>
              <a
                className="text-light"
                href={`${value}/?ref=shubham.sh`}
                target="_blank"
                rel="noreferrer"
                aria-label={key}
              >
                <i className={`icon-${key}`} />
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </Modal>
  );
}

export default Projects;
