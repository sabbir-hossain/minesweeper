import { memo } from 'react'
import Timer from '../../components/timer';
import styles from './header.module.css';

const Header = ({ active='' }) => {
  return (
    <header className={styles.headerContents}>
      <div className={styles.contextHeader}>
        <div className={styles.headerMain}>
          <span className={styles.headerTitle}>Minesweeper</span>
        </div>

        <div className={styles.options}>
          <Timer />
        </div>

        <ul className={styles.headerMenu}>
          <li className={`${styles.routeName} ${active === 'play' && styles.activeRoute}` }>Play</li>
          <li className={`${styles.routeName} ${active === 'create' && styles.activeRoute}` }>Create</li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
