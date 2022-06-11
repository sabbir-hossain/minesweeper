import React, { FC, useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";

import * as Notification from "../../notification";
import { showAdjacent, processData } from "../../../commons/helper";
import {
  gameFailed,
  mineFlagSelected,
  gameSuccess,
} from "../../../views/game/gameAction";
import { IGameReducer } from "../../../views/game/IGame";
import { IPuzzle, IPuzzleData } from "../../../commons/IShare";
import Box from "../box";
import styles from "./box-grid.module.css";

interface BoxGridPropsTypes extends React.ComponentPropsWithoutRef<any> {
  data: IPuzzleData[][];
}

const BoxGrid: FC<BoxGridPropsTypes> = ({ data = [] }: BoxGridPropsTypes) => {
  const { play, flagSelected, findMineCount, totalMines } = useSelector(
    (state: any) => state.gameReducer as IGameReducer
  );

  const [solveMineCount, setSolveMineCount] = useState(findMineCount);

  const dispatch: Dispatch<any> = useDispatch();

  const [puzzleData, setPuzzleData] = useState<IPuzzleData[][]>([]);

  useEffect(() => {
    setPuzzleData(data);
  }, [data]);

  const handleBox = (key: string) => {
    if (!play) {
      return;
    }

    let selectedMine = solveMineCount;
    const data = JSON.parse(JSON.stringify(puzzleData));

    const [a, b] = key.split("-").map((num) => parseInt(num, 10));
    if (data[a][b].value === -1 && !flagSelected) {
      dispatch(gameFailed());
      const { data: dt } = processData(data, "failed");
      setPuzzleData(dt);
    } else if (data[a][b].value === -1 && flagSelected) {
      if (data[a][b].display === "show_flag") {
        data[a][b].display = "";
        selectedMine -= 1;
      } else {
        data[a][b].display = "show_flag";
        selectedMine += 1;

        if (selectedMine === totalMines) {
          dispatch(gameSuccess());
          const { data: dt } = processData(data, "success");
          setPuzzleData(dt);
          Notification.success("Congratulation, you have found all mine(s)");
        }
      }
      setPuzzleData(data);
    } else if (flagSelected) {
      data[a][b].display =
        data[a][b].display === "show_flag" ? "" : "show_flag";
      setPuzzleData(data);
    } else {
      const dt: IPuzzleData[][] = showAdjacent(data, a, b);
      setPuzzleData([...dt]);
    }

    setSolveMineCount(selectedMine);
    dispatch(mineFlagSelected(selectedMine));
  };

  return (
    <>
      {(puzzleData as IPuzzleData[][]).map((dtx: any, idx: number) => (
        <div className={styles.gameRow} key={idx}>
          {(dtx as IPuzzle[]).map((dt: IPuzzle, idx2: number) => (
            <Box
              key={`${idx}-${idx2}`}
              id={`${idx}-${idx2}`}
              value={dt.value}
              cls={
                dt.display === "" || parseInt(dt.display, 10) === 0
                  ? (idx + idx2) % 2 === 0
                    ? `${dt.cls}-even`
                    : dt.cls
                  : dt.cls
              }
              display={dt.display}
              handleBox={handleBox}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default memo(BoxGrid);
