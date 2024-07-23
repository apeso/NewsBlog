import React from 'react';
import styles from "../../style/footer.module.scss"
import PostItem from './PostItem';

const FeaturedPosts: React.FC = () => {
  return (
    <div className={styles.footerSection}>
      <h2>Featured</h2>
      <div className={styles.post}>
      <PostItem />
      <div className={styles.separator}></div>
      <PostItem />
      <div className={styles.separator}></div>
      <PostItem />
      
      </div>
    </div>
  );
};

export default FeaturedPosts;
