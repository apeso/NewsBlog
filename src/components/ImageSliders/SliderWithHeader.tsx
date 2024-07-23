import image from '../../assets/images/slider-image1.png';

import React from 'react';
import styles from '../../style/home.module.scss';


const SliderWithHeader: React.FC = () => {
  return (
    <>
        <div className={styles.slider}>
            <img src={image} />
        </div>
    </>         
  );
};

export default SliderWithHeader;
