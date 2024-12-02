import React from "react"
import s from './styles.module.css'
import { DirectionType, SkeletonType } from "../../interfaces"

interface Props{
    type?: SkeletonType,
    count?: number,
    direction?: DirectionType
}

const Skeleton = ({
  count = 1,
  type = 'banner',
  direction = 'column' }:Props) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ?
          s.columnList : s.rowList}>
          {[...Array(count)].map((_, index) => (
            <li key={index}
              className={type === 'banner' ? s.banner : s.item}>
              <div className={s.square}></div>
              <div className={s.wrapper}>
              <div className={s.first}></div>
              <div className={s.second}></div>
              </div>

              </li>
          ))}
      </ul>
      ) :<li className={type === 'banner' ? s.banner : s.item}></li>
      }
    </>
  )
}

export default Skeleton