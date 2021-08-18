import * as React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Markdown from '~/components/Markdown/Markdown';
import { useRouter } from 'next/dist/client/router';
import Modal from '~/components/Modal/Modal';

import styles from './Projects.module.css';
import Gallery from '~/components/Gallery/Gallery';
import Tags from '~/components/Tags/Tags';

//@ts-ignore
function Projects({ meta, content }) {
  const router = useRouter();
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const images = React.useMemo(
    () =>
      (meta?.images || []).map((el: string) => ({
        src: require(`~/public/projects/images/${el}.png`),
        alt: `${meta.title}_photo_${el}`,
        id: el,
      })),
    [meta?.images, meta?.title],
  );

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
                src={require(`~/public/projects/icons/${meta.icon}.png`)}
                alt={meta.title}
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
        <Tags tags={meta.tags} className={classNames('mb24', 'pl24', 'pr24')} />
        <Gallery images={images} className={classNames('mb24', 'pl24')} />
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
      </div>
    </Modal>
  );
}

export default Projects;
