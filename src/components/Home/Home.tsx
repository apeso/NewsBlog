import styles from '../../style/home.module.scss';
import Banner from '../Banners/Banner';


const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <Banner width={940} height={120} />
      </div>
    </div>
  );
};

export default Home;
