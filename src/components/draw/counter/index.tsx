import { FC } from "react";
import { useSelector } from "react-redux";

import { IReducer } from "../../../commons/IShare";
import { IDrawReducer } from "../../../views/draw/IDraw";
import styles from "./counter.module.css";

const MineCounter: FC = () => {
  const { totalMines }: IDrawReducer = useSelector(
    (state: IReducer): IDrawReducer => state.drawReducer
  );

  const setNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  return (
    <>
      <div className={styles.counter}>{setNumber(totalMines)}</div>
    </>
  );
};

export default MineCounter;
