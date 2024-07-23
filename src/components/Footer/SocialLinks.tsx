import React from 'react';
import styles from "../../style/footer.module.scss"
import dribbleIcon from '../../assets/icons/dribble.png';
import facebookIcon from '../../assets/icons/facebook.png';
import rssIcon from '../../assets/icons/rss.png';
import twitterIcon from '../../assets/icons/twitter.png';
import youtubeIcon from '../../assets/icons/youtube.png';
import skypeIcon from '../../assets/icons/skype.png';
const SocialLinks: React.FC = () => {
  return (
    <div className={styles.socialLinks}>
      <a href="#"><img src={rssIcon}></img></a>
      <a href="#"><img src={facebookIcon}></img></a>
      <a href="#"><img src={twitterIcon}></img></a>
      <a href="#"><img src={dribbleIcon}></img></a>
      <a href="#"><img src={youtubeIcon}></img></a>
      <a href="#"><img src={skypeIcon}></img></a>
     
    </div>
  );
};

export default SocialLinks;
