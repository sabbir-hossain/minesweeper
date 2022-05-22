import { memo } from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <div>
        <span className={styles.footerInfo}>Developed By: </span>
        <span className={styles.footerInfo}>S@BB!R</span>
        <a target={'_blank'} rel="noreferrer" href="https://github.com/sabbir-hossain/minesweeper" className={styles.footerLink}>source-code</a>
      </div>
    </footer>
  );
};

export default memo(Footer);
