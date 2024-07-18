import React from 'react';
import styles from '../../style/banner.module.scss';

interface BannerProps {
  width: number;
  height: number;
}

const Banner: React.FC<BannerProps> = ({ width, height }) => {
  const bannerStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={styles.banner} style={bannerStyle}>
      <span>banner</span> 
      <span>{width}x{height}</span>
    </div>
  );
};

export default Banner;
