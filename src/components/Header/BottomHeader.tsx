import React, { useState } from 'react';
import styles from '../../style/bottomHeader.module.scss';

const BottomHeader: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string | null>('NEWS');

  return (
    <div className={styles.bottomHeader}>
      <div className={styles.bottomNav}>
        <a
          className={`${styles.navItem} ${styles.news} ${activeNavItem === 'NEWS' ? styles.active : ''}`}
          href="#"
          onClick={() => setActiveNavItem('NEWS')}
        >
          NEWS
        </a>
        <a
          className={`${styles.navItem} ${styles.business} ${activeNavItem === 'BUSINESS' ? styles.active : ''}`}
          href="#"
          onClick={() => setActiveNavItem('BUSINESS')}
        >
          BUSINESS
        </a>
        <a
          className={`${styles.navItem} ${styles.sport} ${activeNavItem === 'SPORT' ? styles.active : ''}`}
          href="#"
          onClick={() => setActiveNavItem('SPORT')}
        >
          SPORT
        </a>
        <a
          className={`${styles.navItem} ${styles.life} ${activeNavItem === 'LIFE' ? styles.active : ''}`}
          href="#"
          onClick={() => setActiveNavItem('LIFE')}
        >
          LIFE
        </a>
        <a
          className={`${styles.navItem} ${styles.tech} ${activeNavItem === 'TECH' ? styles.active : ''}`}
          href="#"
          onClick={() => setActiveNavItem('TECH')}
        >
          TECH
        </a>
        <a
          className={`${styles.navItem} ${styles.travel} ${activeNavItem === 'TRAVEL' ? styles.active : ''}`}
          href="#"
          onClick={() => setActiveNavItem('TRAVEL')}
        >
          TRAVEL
        </a>
      </div>
    </div>
  );
};

export default BottomHeader;
