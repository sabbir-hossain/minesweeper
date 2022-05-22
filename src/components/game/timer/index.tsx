import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from 'redux';

import * as Notification from '../../notification';
import { generateTimer } from '../../../commons/helper';
import { setFlagSelected, setFlagUnSelected } from '../../../views/game/gameAction';

import styles from './timer.module.css';

export default function Timer() {
  const { startTime, currentTime, totalTime, flagSelected, play, failed, success, findMineCount, totalMines } = useSelector(
    (state: any) => state.gameReducer
  );
  const dispatch: Dispatch<any> = useDispatch();

  const [_minutes, setMinutes] = useState(0);
  const [_seconds, setSeconds] = useState(0);
  const halfTime = Math.floor( totalTime / ( 2 * 1000 ) );

  useEffect(() => {
    const showToastrNotification = (minutes: number, seconds: number, remainingTime: number) => {
      if( minutes !== 0) {
        if( remainingTime === halfTime ) {
          Notification.info(`half time already passed`)
        } 
      }
      else {
        if( seconds <= 20 && seconds > 0 ) {
          seconds % 3 === 0 && Notification.warning(`${seconds} (s) remaining`);
        }
      }
    }

    const { minutes, seconds, remainingTime } = generateTimer(startTime, currentTime, totalTime);
    if ((!play && failed) || success || (minutes <= 0 && seconds <= 0)) {
      setMinutes(0);
      setSeconds(0);
    } else {
      setMinutes(minutes);
      setSeconds(seconds);
      showToastrNotification(minutes, seconds, remainingTime);
    }
    
  }, [startTime, currentTime, totalTime, halfTime, play, failed, success, dispatch]);

  const toggleFlatBtn = () => {
    flagSelected ? dispatch(setFlagUnSelected()) : dispatch(setFlagSelected());
  }

  const setNumber = (num: number) => num < 10 ? `0${num}` : `${num}`;

  return (
    <>
      <div className={styles.counter}>
        {findMineCount} / {totalMines}
      </div>

      <div className={styles.counter}>
        { success && <img className={styles.flagIcoBtn2} alt='flag-btn' src={'./success.png'} /> }
        { play && <img className={styles.flagIcoBtn2} alt='flag-btn' src={'./face.png'} /> }
        { !play && failed && <img className={styles.flagIcoBtn2} alt='flag-btn' src={'./sad-face.png'} /> }

      </div>

      <div>
        <button className={`${styles.flagBtn} ${flagSelected && styles.flagBtnSelected}`} onClick={toggleFlatBtn}>
          <img className={styles.flagIcoBtn} alt='flag-btn' src={'./flag-icon.png'} />
        </button>
      </div>

      <div className={styles.counter}>
        {setNumber(_minutes)}:{setNumber(_seconds)}
      </div>
    </>
  )
}