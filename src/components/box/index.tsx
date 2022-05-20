import React from 'react';
import { useSelector } from "react-redux";

import styles from './box.module.css';

export interface Props extends React.ComponentPropsWithoutRef<any> {
  play?: boolean,
  value?: number,
  key?: string,
  id: string,
  cls: string,
  display: string,
  handleBox: any
}

// const showDisable = (id: string) => {
//   const [a, b] = id.split('-');
//   return `${styles.boxDisable} ${(+a + +b) % 2 === 0 && styles.boxDisableEven}`
// }

const showMine = (play: boolean) => (
  <div className={`${play ? styles.box : styles.boxDisable}`}>
    <img alt='mine' src={'./mine.jpg'} className={styles.boxImg} />
  </div>
);

const showFlag = ({ play, id, handleBox }: Props) => (
  <div className={` ${play ? styles.box : styles.boxDisable}`} onClick={() => handleBox(id)}>
    <img alt='flag' src={'./flag-icon2.png'} className={styles.boxImg} />
  </div>
);

const others = ({ id, cls, display, handleBox }: Props) => (
  <div className={
    `${`${styles.box} ${styles[`${cls}`]}`}`
  } onClick={() => handleBox(id)}>
    {display}
  </div>
)

const Box = ({ id, cls, display, handleBox }: Props) => {

  const { play } = useSelector(
    (state: any) => state.gameReducer
  );

  return display === 'show_mine' ? showMine(play)
    : display === 'show_flag' ? showFlag({ play, id, cls, display, handleBox })
      : others({ play, id, cls, display, handleBox });
};

export default Box;
