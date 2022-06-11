import { FC, useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Dispatch } from "redux";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import * as Notification from "../../../components/notification";
import {
  gameLoadingAction,
  gameLoadingComplete,
  loadingGame,
  gameStarted,
  countdown,
  gameTimeout,
} from "../gameAction";
import { processData, getRemainingTime } from "../../../commons/helper";
import BoxGrid from "../../../components/game/box-grid";
import { IGameReducer } from "../IGame";
import { IPuzzleData, IProcessData } from "../../../commons/IShare";
import { IReducer } from "../../../commons/IShare";

import Layout from "../../../layout";
import styles from "./play.module.css";

const Game: FC = () => {
  const {
    isLoaded,
    play,
    failed,
    success,
    startTime,
    currentTime,
    totalTime,
  }: IGameReducer = useSelector(
    (state: IReducer): IGameReducer => state.gameReducer as IGameReducer,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();
  const [data, setData] = useState<IPuzzleData[][]>([]);

  useEffect(() => {
    function fetchGame() {
      dispatch(gameLoadingAction());
      dispatch(showLoading());
      loadingGame()
        .then((game: IPuzzleData[][]) => {
          dispatch(gameLoadingComplete());
          const { mineCounter, data }: IProcessData = processData(game);
          setData(data);
          dispatch(gameStarted(mineCounter));
        })
        .catch((error) => {
          console.error(error);
          setData([]);
        })
        .finally(() => {
          dispatch(hideLoading());
        });
    }

    !isLoaded && fetchGame();
  }, [dispatch, isLoaded]);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      const remainingTime: number = getRemainingTime(
        startTime,
        currentTime,
        totalTime
      );
      if (remainingTime <= 0 && startTime !== 0) {
        Notification.error("timeout, game over");
        dispatch(gameTimeout());
        clearInterval(counterInterval);
      } else if (success || (!play && failed)) {
        clearInterval(counterInterval);
      } else {
        dispatch(countdown());
      }
    }, 1000);

    return () => {
      clearInterval(counterInterval);
    };
  }, [dispatch, failed, play, success, startTime, currentTime, totalTime]);

  return (
    <Layout>
      <main className={styles.maincontents}>
        <div className={styles.gameDisplay}>
          <BoxGrid data={data} />
        </div>
      </main>
    </Layout>
  );
};

export default Game;
