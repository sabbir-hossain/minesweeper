import { useSelector } from "react-redux";

import styles from './counter.module.css';

export default function MineCounter() {
  const { totalMines } = useSelector(
    (state: any) => state.drawReducer
  );

  const setNumber = (num: number) => num < 10 ? `0${num}` : `${num}`;

  return (
    <>
      <div className={styles.counter}>
        {setNumber(totalMines)}
      </div>
    </>
  )
}