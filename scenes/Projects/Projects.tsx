import * as React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import Modal from '~/components/Modal/Modal';

import styles from './Projects.module.css';

interface IProject {
  project: any;
}

function Projects({ project }: IProject) {
  const router = useRouter();
  const bodyRef = React.useRef<HTMLDivElement>(null);
  if (process.browser) {
    //@ts-ignore
    bodyRef.current = document.getElementById?.('main');
  }
  function onClose() {
    router.push('/', undefined, { scroll: false });
  }
  if (!project) return null;
  return (
    <Modal bodyRef={bodyRef} onClose={onClose}>
      <div>
        <section
          className={classNames('flex', 'flex-start-top', styles.shortInfo)}
        >
          <div className={classNames(styles.image, 'mr16')}>
            <figure>
              <Image
                src={require(`~/public/projects/${project.image}.png`)}
                alt="Shubham Singh"
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </div>
          <div>
            <p className="text-dark font-medium text-16">{project.name}</p>
            <p className="text-14 text-light">{project.description}</p>
          </div>
        </section>
      </div>
    </Modal>
  );
}

export default Projects;
