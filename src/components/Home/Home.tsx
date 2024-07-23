import styles from '../../style/home.module.scss';
import Banner from '../Banners/Banner';

import ImageSlider from '../ImageSliders/SliderWithHeader';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <Banner width={940} height={120} /> 
        <ImageSlider />
        <div className={styles.homeContent}>
          <div className={styles.homeNews}>
            <p>helo</p>
          </div>
          <div className={styles.homeSideBar}>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
