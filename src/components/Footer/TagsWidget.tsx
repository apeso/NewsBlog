import React from 'react';
import styles from "../../style/footer.module.scss"

const TagsWidget: React.FC = () => {
  return (
    <div className={styles.footerSection}>
      <h2>Tags Widget</h2>
      <div className={styles.tags}>
        <a href="#">assueverit</a>
        <a href="#">utroque</a>
        <a href="#">probo</a>
        <a href="#">assuev</a>
        <a href="#">probo</a>
        <a href="#">utroque</a>
        <a href="#">tilt</a>
        <a href="#">assueverit</a>
        <a href="#">assueverit</a>
        <a href="#">utroque</a>
        <a href="#">probo</a>
        <a href="#">assueverit</a>
        <a href="#">utroque</a>
       
      </div>
    </div>
  );
};

export default TagsWidget;
