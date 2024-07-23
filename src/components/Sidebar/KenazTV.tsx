import React from 'react';
import styles from '../../style/sidebar.module.scss';
import videoThumbnail from '../../assets/images/kenazTV.png';
import playButtonIcon from '../../assets/icons/playVideoIcon.png';

const KenazTV: React.FC = () => {
  return (
    <div className={styles.videoWidget}>
      <h2>Kenaz TV</h2>
      <div className={styles.videoThumbnail}>
        <img src={videoThumbnail} alt="Video Thumbnail" />
        <div className={styles.playButton}>
          <img src={playButtonIcon} alt="Play Button" />
        </div>
      </div>
      <div className={styles.videoDetails}>
        <div className={styles.date}>August 26, 2013</div>
        <div className={styles.title}>
          NASA releases portrait of a planet waving at Saturn
        </div>
      </div>
    </div>
  );
};

export default KenazTV;
