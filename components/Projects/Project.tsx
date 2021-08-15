import classNames from 'classnames';
import Image from 'next/image';
import projectList from '~/data/project';
import blogList from '~/data/blog';
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
      <div className="flex flex-start-top">
        <div>
          <p className={classNames('text-dark', styles.info)}>
            Dive in and learn something new!
          </p>
          <p className="text-14 text-light">
            {blogList.map((el) => (
              <p className="text-14" key={el.name}>
                <a
                  className={classNames('link', styles.link)}
                  href={`${el.link}/?ref=shubham.sh`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.name}
                </a>
              </p>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
