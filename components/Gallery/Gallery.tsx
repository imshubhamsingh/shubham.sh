import classNames from 'classnames';
import Image from 'next/image';
import styles from './Gallery.module.css';

interface IGallery {
  images: Array<{
    src: string;
    title: string;
    id: string;
  }>;
  className: string;
}

function Gallery({ images = [], className = '' }: IGallery) {
  if (!images.length) {
    return null;
  }
  return (
    <section className={classNames(styles.gallery, className)}>
      {images.map((el) => (
        <figure key={el.id}>
          <Image
            src={el.src}
            alt={`${el.title}_photo_${el.id}`}
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
