import classNames from 'classnames';
import Image from 'next/image';
import projectList from '~/data/project';
import styles from './Project.module.css';

function Project() {
  return (
    <section className={styles.container}>
      {projectList.map((el) => (
        <a
          key={el.name}
          className="flex flex-start-top"
          href={`${el.link}/?ref=shubham.sh`}
          target="_blank"
          rel="noreferrer"
        >
          <div className={classNames(styles.image, 'mr16')}>
            <figure>
              <Image
                src={require(`~/public/projects/${el.image}.png`)}
                alt="Shubham Singh"
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
      ))}
    </section>
  );
}

export default Project;
