import { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { showAdjacent, processData } from '../../commons/helper';
import { gameFailed, IGame, mineFlagSelected } from '../../views/game/gameAction';
import Box from '../box';
import styles from './box-grid.module.css';

const BoxGrid = ({ data = [] }) => {
  const { play, flagSelected, findMineCount } = useSelector(
    (state: any) => state.gameReducer
  );
  const dispatch = useDispatch();

  const [puzzleData, setPuzzleData] = useState<IGame[][]>([]);

  useEffect(() => {
    setPuzzleData(data);
  }, [data]);

  const handleBox = (key: string) => {
    if (!play) {
      return;
    }

    const data = JSON.parse(JSON.stringify(puzzleData));
    
    const [a, b] = key.split('-');
    if (data[+a][+b].value === -1 && !flagSelected) {
      gameFailed(dispatch);
      const { data: dt } = processData(data, true);
      setPuzzleData(dt);
    }
    else if (data[+a][+b].value === -1 && flagSelected) {
      data[+a][+b].display = data[+a][+b].display === 'show_flag' ? '' : 'show_flag';
      setPuzzleData(data);
      mineFlagSelected(dispatch, findMineCount + 1);
    }
    else if (flagSelected) {
      data[+a][+b].display = data[+a][+b].display === 'show_flag' ? '' : 'show_flag';
      setPuzzleData(data);
      console.log('22222 : ', { flagSelected, display: data[+a][+b].display });
    }
    else {
      const dt: IGame[][] = showAdjacent(data, +a, +b);
      setPuzzleData([...dt]);
    }
  }

  return (
    <>
      {
        (puzzleData as IGame[][]).map((dtx: any, idx: number) => (
          <div className={styles.gameRow} key={idx}>
            {
              (dtx as IGame[]).map((dt: IGame, idx2: number) => (
                <Box
                  key={`${idx}-${idx2}`}
                  id={`${idx}-${idx2}`}
                  value={dt.value}
                  cls={
                    (dt.display === '' || parseInt(dt.display, 10) === 0)
                      ? (idx + idx2) % 2 === 0 ? `${dt.cls}-even` : dt.cls
                      : dt.cls
                  }
                  display={dt.display}
                  handleBox={handleBox}
                />
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default memo(BoxGrid);