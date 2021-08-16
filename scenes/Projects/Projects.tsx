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
        <Markdown className={styles.main} html={content} />
      </div>
    </Modal>
  );
}

export default Projects;
