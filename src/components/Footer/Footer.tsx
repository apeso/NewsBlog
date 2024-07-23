import React from 'react';
import SocialLinks from './SocialLinks';
import Newsletter from './Newsletter';
import TagsWidget from './TagsWidget';
import FeaturedPosts from './FeaturedPosts';
import RandomPosts from './RandomPosts';
import TwitterFeed from './TwitterFeed';
import styles from '../../style/footer.module.scss';
import logoImage from "../../assets/images/logoInBlue.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerPurpleBlock}></div>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
            <div className={styles.footerSection}>
                <div className={styles.logoContainer}>
                    <img src={logoImage} alt="Logo" className={styles.logoImage} />
                    <span>Kenaz</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</p>
                <SocialLinks />
            </div>
            <Newsletter />
            <TagsWidget />
        </div>
        <div className={styles.footerBottom}>
            <FeaturedPosts />
            <RandomPosts />
            <TwitterFeed />
        </div>
        <div className={styles.separator}></div>
        <div className={styles.footerCopy}>
            <div>© 2013 - Kenaz Template - Proudly made at Plava tvrornica Croatia</div>
            <div>Typography - Templates - Contact Form - 404 Page</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
