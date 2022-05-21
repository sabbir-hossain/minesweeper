
import DrawBox from '../draw-box';
import styles from './draw-box-grid.module.css';

export interface Props extends React.ComponentPropsWithoutRef<any> {
  data: number[][],
  handleBoxSelect: any
}

const DrawBoxGrid = ({ data = [], handleBoxSelect }: Props) => {
  return (
    <>
      {
        data.map((dt, idx) => (
          <div className={styles.gameRow} key={idx}>
            {
              dt.map((dtx, idx2) => (
                <DrawBox
                  key={`${idx}-${idx2}`}
                  id={`${idx}-${idx2}`}
                  cls={
                    (idx + idx2) % 2 === 0 ? 'range-0-even' : 'range-0'
                  }
                  display={dtx}
                  handleBox={handleBoxSelect} />
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default DrawBoxGrid;