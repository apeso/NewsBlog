import styles from '../../style/topHeader.module.scss';
import searchIcon from "../../assets/icons/search.png";
import logoImage from "../../assets/images/logo.png";

const TopHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.rectangle}>
            <img src={logoImage} alt="Logo" className={styles.logoImage} />
          </div>
          <p className={styles.logoText}>Kenaz</p>
        </div>
        <div className={styles.navContainer}>
          <div className={styles.subNav}>
            <a className={styles.navItem} href="#">Media</a>
            <a className={styles.navItem} href="#">Marketing</a>
            <a className={styles.navItem} href="#">Contact</a>
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.rectangle}>
            <img src={searchIcon} alt="Search" className={styles.searchIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
