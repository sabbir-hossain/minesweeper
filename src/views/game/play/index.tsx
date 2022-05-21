import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as Notification from '../../../components/notification';
import { gameLoadingAction, gameLoadingComplete, loadingGame, gameStarted, countdown, gameTimeout, } from '../gameAction';
import { processData, getRemainingTime } from '../../../commons/helper';
import BoxGrid from '../../../components/game/box-grid';
import { IGameReducer } from '../IGame';
import { AppDispatch } from '../../../store';

import Layout from '../../../layout';
import styles from './play.module.css';

function Game() {
  const { isLoaded, play, failed, success, startTime, currentTime, totalTime }: IGameReducer = useSelector(
    (state: any) => state.gameReducer as IGameReducer
  );
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchGame() {
      dispatch(gameLoadingAction());
      loadingGame()
        .then((game) => {
          const { mineCounter, data } = processData(game);
          setData(data);
          // gameStarted(dispatch, mineCounter);
          dispatch( gameStarted(mineCounter) );
        })
        .catch((error) => {
          console.error(error);
          setData([]);
        });
      // dispatch(loadingGame());
    }

    !isLoaded && fetchGame();
  }, [dispatch, isLoaded]);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      const remainingTime = getRemainingTime(startTime, currentTime, totalTime);
      if (remainingTime <= 0 && startTime !== 0) {
        Notification.error('timeout, game over');
        gameTimeout(dispatch);
        // dispatch()
      } else {
        countdown(dispatch);
      }

      if ((!play && failed) || success) {
        clearInterval(counterInterval);
      }
    }, 1000)

    return () => {
      clearInterval(counterInterval)
    }
  }, [dispatch, failed, play, success, startTime, currentTime, totalTime])

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
