import React from 'react';
import styles from "../../style/footer.module.scss"

const Newsletter: React.FC = () => {
  return (
    <div className={styles.footerSection}>
      <h2>Newsletter</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante...</p>
      <form>
        <input type="email" placeholder="Your mail" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
