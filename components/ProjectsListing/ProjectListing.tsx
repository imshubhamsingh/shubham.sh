import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './ProjectListing.module.css';

function ProjectListing() {
  return (
    <>
      {(PROJECT_LIST || []).map((el) => (
        <Link key={el.title} href={`/projects/icons/${el.slug}`} scroll={false}>
          <a className="flex flex-start-top">
            <div className={classNames(styles.image, 'mr16')}>
              <figure>
                <Image
                  src={require(`~/public/projects/icons/${el.icon}.png`)}
                  alt={el.title}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
            </div>
            <div>
              <p className="text-dark">{el.title}</p>
              <p className="text-14 text-light line-clamp">{el.excerpt}</p>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}

export default ProjectListing;
