import { FC } from "react";
import styles from "./draw-box.module.css";

export interface Props extends React.ComponentPropsWithoutRef<any> {
  key?: string;
  id: string;
  cls: string;
  display: number;
  handleBox: any;
}

const showMine: FC<Props> = ({ id, handleBox }: Props) => (
  <div className={`${styles.box}`} onClick={() => handleBox(id)}>
    <img alt="mine" src={"./mine.png"} className={styles.boxImg} />
  </div>
);

const others: FC<Props> = ({ id, cls, handleBox }: Props) => (
  <div
    className={`${`${styles.box} ${styles[`${cls}`]}`}`}
    onClick={() => handleBox(id)}
  >
    {""}
  </div>
);

const DrawBox: FC<Props> = ({ id, cls, display, handleBox }: Props) => {
  return display === -1
    ? showMine({ id, cls, display, handleBox })
    : others({ id, cls, display, handleBox });
};

export default DrawBox;
