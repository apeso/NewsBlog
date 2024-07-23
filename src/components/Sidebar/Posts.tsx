import React from 'react';
import styles from '../../style/sidebar.module.scss';
import PostItem from '../Footer/PostItem';


const Posts: React.FC = () => {
  return (
    <div className={styles.posts} >
        <div className={styles.tabMenu}>
            <div className={styles.tab}>Popular</div>
            <div className={styles.tab}>Top Rated</div>
            <div className={styles.tab}>Comments</div>
        </div>
        <div className={styles.post}>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    </div>
  );
};

export default Posts;
