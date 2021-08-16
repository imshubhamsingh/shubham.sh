import classNames from 'classnames';
import Image from 'next/image';
import projectList from '~/data/project';
import styles from './Project.module.css';
import Link from 'next/link';

function Project() {
  return (
    <>
      {projectList.map((el) => (
        <Link key={el.name} href={`/projects/${el.id}`} scroll={false}>
          <a className="flex flex-start-top">
            <div className={classNames(styles.image, 'mr16')}>
              <figure>
                <Image
                  src={require(`~/public/projects/${el.image}.png`)}
                  alt={el.name}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
            </div>
            <div>
              <p className="text-dark">{el.name}</p>
              <p className="text-14 text-light">{el.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}

export default Project;
