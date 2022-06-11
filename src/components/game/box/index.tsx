import { ComponentPropsWithoutRef, FC } from "react";
import { useSelector } from "react-redux";

import styles from "./box.module.css";

export interface Props extends ComponentPropsWithoutRef<any> {
  play?: boolean;
  value?: number;
  key?: string;
  id: string;
  cls: string;
  display: string;
  handleBox: any;
}

const showMine: FC<boolean> = (play: boolean) => (
  <div className={`${play ? styles.box : styles.boxDisable}`}>
    <img alt="mine" src={"./mine.png"} className={styles.boxImg} />
  </div>
);

const showFlag: FC<Props> = ({ play, id, handleBox }: Props) => (
  <div
    className={` ${play ? styles.box : styles.boxDisable}`}
    onClick={() => handleBox(id)}
  >
    <img alt="flag" src={"./flag-icon.png"} className={styles.boxImg} />
  </div>
);

const others: FC<Props> = ({ id, cls, display, handleBox }: Props) => (
  <div
    className={`${`${styles.box} ${styles[`${cls}`]}`}`}
    onClick={() => handleBox(id)}
  >
    {display}
  </div>
);

const Box: FC<Props> = ({ id, cls, display, handleBox }: Props) => {
  const { play } = useSelector((state: any) => state.gameReducer);

  return display === "show_mine"
    ? showMine(play)
    : display === "show_flag"
    ? showFlag({ play, id, cls, display, handleBox })
    : others({ play, id, cls, display, handleBox });
};

export default Box;
