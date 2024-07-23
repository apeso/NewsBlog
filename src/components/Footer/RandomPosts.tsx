import React from 'react';
import styles from "../../style/footer.module.scss"
import PostItem from './PostItem';

const RandomPosts: React.FC = () => {
  return (
    <div className={styles.footerSection}>
      <h2>Random Posts</h2>
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

export default RandomPosts;
