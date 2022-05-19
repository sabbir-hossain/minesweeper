import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { generateTimer } from '../../commons/helper';
import { setFlagSelected, setFlagUnSelected } from '../../views/game/gameAction';

import styles from './timer.module.css';

export default function Timer() {
  const { startTime, currentTime, totalTime, flagSelected, play, failed, findMineCount, totalMines } = useSelector(
    (state: any) => state.gameReducer
  );
  const dispatch = useDispatch();

  const [_minutes, setMinutes] = useState(0);
  const [_seconds, setSeconds] = useState(0);

  useEffect(() => {
    const { minutes, seconds } = generateTimer(startTime, currentTime, totalTime);
    if ((!play && failed) || (minutes <= 0 && seconds <= 0)) {
      setMinutes(0);
      setSeconds(0);
    } else {
      setMinutes(minutes);
      setSeconds(seconds);
    }
  }, [startTime, currentTime, totalTime, play, failed, dispatch]);

  const toggleFlatBtn = () => {
    flagSelected ? setFlagUnSelected(dispatch) : setFlagSelected(dispatch);
  }

  const setNumber = (num: number) => num < 10 ? `0${num}` : `${num}`;
  // findMineCount, totalMines
  return (
    <>
      <div className={styles.counter}>
        {findMineCount} / { totalMines }
      </div>

      <div>
        <button className={`${styles.flagBtn} ${flagSelected && styles.flagBtnSelected}`} onClick={toggleFlatBtn}>
          <img className={styles.flagIcoBtn} alt='flag-btn' src={'./flag-icon2.png'} />
        </button>
      </div>

      <div className={styles.counter}>
        {setNumber(_minutes)}:{setNumber(_seconds)}
      </div>
    </>
  )
}