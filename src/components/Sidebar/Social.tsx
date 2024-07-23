import React from 'react';
import styles from '../../style/sidebar.module.scss';
import facebookIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import youtubeIcon from '../../assets/icons/youtube.png';

const Social: React.FC = () => {
  return (
    <div className={styles.socialWidget}>
      <h2>Social</h2>
      <div className={styles.socialItem}>
        <div className={styles.socialIcon}>
          <img src={facebookIcon} alt="Facebook" />
        </div>
        <div className={styles.socialText}>Like</div>
        <div className={styles.socialCount}>25041 Fans</div>
      </div>
      <div className={styles.socialItem}>
        <div className={styles.socialIcon}>
          <img src={twitterIcon} alt="Twitter" />
        </div>
        <div className={styles.socialText}>Follow</div>
        <div className={styles.socialCount}>25041 Followers</div>
      </div>
      <div className={styles.socialItem}>
        <div className={styles.socialIcon}>
          <img src={youtubeIcon} alt="YouTube" />
        </div>
        <div className={styles.socialText}>Subscribe</div>
        <div className={styles.socialCount}>941 Subscribers</div>
      </div>
    </div>
  );
};

export default Social;
