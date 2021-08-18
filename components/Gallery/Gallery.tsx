import * as React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import useDrag from '~/hooks/useDarg';
import styles from './Gallery.module.css';

interface IGallery {
  images: Array<{
    src: string;
    id: string;
    alt: string;
  }>;
  className: string;
}

function Gallery({ images = [], className = '' }: IGallery) {
  const galleryRef = React.useRef<HTMLElement>(null);

  useDrag(galleryRef);
  if (!images.length) {
    return null;
  }
  return (
    <section className={classNames(styles.gallery, className)} ref={galleryRef}>
      {images.map((el) => (
        <figure key={el.id}>
          <Image
            src={el.src}
            alt={el.alt}
            draggable={'false'}
            objectFit="cover"
            placeholder="blur"
          />
        </figure>
      ))}
    </section>
  );
}

export default Gallery;
