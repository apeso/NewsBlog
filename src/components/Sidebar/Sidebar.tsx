import React from 'react';
import styles from '../../style/sidebar.module.scss';
import Posts from './Posts';
import Social from './Social';
import Banner from '../Banners/Banner';
import KenazTV from './KenazTV';


const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      
        <div className={styles.sidebarPosts}>
            <Posts />  
        </div>
        <div className={styles.sidebarSocial}>
            <Social />
        </div>
        <div className={styles.sidebarKenazTV}>
          <KenazTV />
        </div>
        <div className={styles.sidebarBanner}>
          <div className={styles.sidebarBannerItem}>
            <Banner width={128} height={128} />
          </div>
          <div className={styles.sidebarBannerItem}>
            <Banner width={128} height={128} />
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
