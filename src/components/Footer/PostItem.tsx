import React from 'react';
import styles from '../../style/postItem.module.scss';
import postImage from '../../assets/images/postImage.png'; 
import commentIcon from '../../assets/icons/comment.png';

const PostItem: React.FC = () => {
    return (
        <>
      <div className={styles.postItem}>
        <div className={styles.content}>
          <div className={styles.dateAndComments}>
            <div className={styles.date}>August 26, 2013</div>
            <div className={styles.comments}>
              <img className={styles.commentIcon} src={commentIcon} />
              <span className={styles.commentCount}>5</span>
            </div>
          </div>
          <div className={styles.title}>
            Palestinians call off peace talks after clash
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={postImage} alt="Post" className={styles.image} />
        </div>
        </div>
      </>
    );
  };
  

export default PostItem;
