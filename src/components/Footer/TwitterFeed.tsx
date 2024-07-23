import React from 'react';
import styles from "../../style/footer.module.scss";
import twitterIcon from '../../assets/icons/tweetIcon.png';
const TwitterFeed: React.FC = () => {
  return (
    <div className={styles.footerSection}>
      <h2>Twitter Feed</h2>
      <div className={styles.tweet}>
        <div className={styles.tweetAuthor}>
          <img src={twitterIcon} />
          Envato <span >@envato</span>
        </div>
        <span> Is this your typical million dollar day in the park? <br /> http://enva.to/150vxFC  Happy @TrueThemes Day! <br /> #ThemeForest pic.twitter.com/EHz7awxOXy</span>
      </div>
      <div className={styles.tweet}>
      <div className={styles.tweetAuthor}>
          <img src={twitterIcon} />
          Envato <span >@envato</span>
        </div>
        <span> Happy TrueThemes Day<br /> http://enva.to/1dRzgLD </span>
      </div>
      <div className={styles.tweet}>
       <div className={styles.tweetAuthor}>
          <img src={twitterIcon} />
          Envato <span>@envato</span>
        </div>
        <span>@robscri I would really want to look into what's taking so long. Thank you ever so much! ^TC</span>
      </div>
    </div>
  );
};

export default TwitterFeed;
