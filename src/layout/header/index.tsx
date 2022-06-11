import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Timer from "../../components/game/timer";
import MineCounter from "../../components/draw/counter";
import styles from "./header.module.css";

interface PropsTypes extends React.ComponentPropsWithoutRef<any> {
  active: string;
}

const Header: FC<PropsTypes> = ({ active = "" }: PropsTypes) => {
  const { playSelected } = useSelector((state: any) => state.gameReducer);

  return (
    <header className={styles.headerContents}>
      <div className={styles.contextHeader}>
        <div className={styles.headerMain}>
          <span className={styles.headerTitle}>Minesweeper</span>
        </div>

        <div className={styles.options}>
          {playSelected ? <Timer /> : <MineCounter />}
        </div>

        <ul className={styles.headerMenu}>
          <li
            className={`${styles.routeName} ${
              active === "play" && styles.activeRoute
            }`}
          >
            <Link to="/">Play</Link>
          </li>

          <li
            className={`${styles.routeName} ${
              active === "create" && styles.activeRoute
            }`}
          >
            <Link to="/draw">Create</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
