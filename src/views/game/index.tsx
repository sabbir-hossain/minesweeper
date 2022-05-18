import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as Notification from '../../components/notification';
import { loadingGame, gameStarted, countdown, gameTimeout, } from './gameAction';
import { processData, getRemainingTime } from '../../commons/helper';
import BoxGrid from '../../components/box-grid';

import Layout from '../../layout';
import styles from './game.module.css';

function Game() {
  const { isLoaded, play, failed, success, startTime, currentTime, totalTime } = useSelector(
    (state: any) => state.gameReducer
  );
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchGame() {
      loadingGame(dispatch)
        .then((game) => {
          const data = processData(game);
          setData(data);
          gameStarted(dispatch);
        })
        .catch((error) => {
          console.error(error);
          setData([]);
        });
    }

    !isLoaded && fetchGame();
  }, [dispatch, isLoaded]);

  // useEffect(() => {
  //   const counterInterval = setInterval(() => {
  //     const remainingTime = getRemainingTime(startTime, currentTime, totalTime);
  //     if (remainingTime <= 0) {
  //       Notification.error('timeout');
  //       gameTimeout(dispatch);
  //     } else {
  //       countdown(dispatch);
  //     }

  //     if ((!play && failed) || success) {
  //       clearInterval(counterInterval);
  //     }
  //   }, 1000)

  //   return () => {
  //     clearInterval(counterInterval)
  //   }
  // }, [dispatch, failed, play, success, startTime, currentTime, totalTime])

  return (
    <Layout>
      <main className={styles.maincontents}>
        <div className={styles.gameDisplay}>
          <BoxGrid data={data} />
        </div>
      </main>
    </Layout>
  );
}

export default Game;
