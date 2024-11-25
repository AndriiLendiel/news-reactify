import React from 'react'
import s from './styles.module.css'
export const Image = ({image}) => {
  return (
      <div className={s.wrapper}>
          {image ? <img src={image} alt='news' className={s.image} /> : null}
    </div>
  )
}

export default Image