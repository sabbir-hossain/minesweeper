import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { resetGame } from '../../game/gameAction';
import { setMineAction } from '../drawAction';
import { localStorageKeyName } from '../../../service/get';
import DrawBoxGrid from '../../../components/draw/draw-box-grid';
import Layout from '../../../layout';
import styles from './create.module.css';

const maxX = 20;
const maxY = 48;

export default function Draw() {
  const dispatch = useDispatch();

  const [totalMine, setTotalMine] = useState<number>(0);
  const [data, setData] = useState<number[][]>([]);

  useEffect(() => {
    resetGame(dispatch);
    const dt: number[][] = Array.from({ length: maxX }).map(() => Array.from({ length: maxY }).fill(0)) as number[][];
    setData(dt);
    
  }, [dispatch]);

  const handleBoxSelect = (key: string) => {
    const [a, b] = key.split('-').map((num) => parseInt(num, 10));
    const dt = JSON.parse(JSON.stringify(data));
    let _totalMine = totalMine;
    if(dt[a][b] === -1) {
      _totalMine = totalMine - 1;      
      dt[a][b] = 0;
    } else {
      _totalMine = totalMine + 1; 
      dt[a][b] = -1;
    }

    window.localStorage.setItem(localStorageKeyName, JSON.stringify(dt));
    setData(dt);
    setMineAction(dispatch, _totalMine);
    setTotalMine(_totalMine);
  }

  return (
    <Layout>
      <main className={styles.maincontents}>
        <div className={styles.gameDisplay}>
          <DrawBoxGrid
            data={data}
            handleBoxSelect={handleBoxSelect} />
        </div>
      </main>
    </Layout>
  );
}