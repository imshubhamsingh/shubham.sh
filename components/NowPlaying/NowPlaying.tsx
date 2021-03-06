import classNames from 'classnames';
import useSWR from 'swr';
import socialMediaLinks from '~/data/socialMedia';

import styles from './NowPlaying.module.css';

const { icon, link } = socialMediaLinks.filter(
  (el) => el.name === 'spotify',
)[0];

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', {
    refreshInterval: 210000, // polling after 3 min 10 sec - avg song length,
    refreshWhenHidden: true,
  });
  if (!data) return null;
  return (
    <div className={classNames('flex flex-start', styles.playing)}>
      {!data.isPlaying && (
        <a
          className="text-light"
          href={`${link}/?ref=shubham.sh`}
          target="_blank"
          rel="noreferrer"
          aria-label={'Spotify'}
        >
          <i className={classNames(icon, styles.logo)} />
        </a>
      )}
      {data.isPlaying && (
        <a
          className="flex flex-start"
          href={`${link}/?ref=shubham.sh`}
          target="_blank"
          rel="noreferrer"
          aria-label={`I am currently listening to ${data.title} by ${data?.artist}}`}
        >
          {[1, 2, 3].map((el) => (
            <span key={el} className={styles.crest} />
          ))}
        </a>
      )}
      <div className="flex flex-start text-14 ml8">
        {data?.songUrl ? (
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            {data.title} ({data?.artist})
          </a>
        ) : (
          <span>Not Playing</span>
        )}
      </div>
    </div>
  );
}
