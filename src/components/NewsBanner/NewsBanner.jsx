import React from "react"
import s from './styles.module.css'
import { formatTimeAgo } from "../../helpers/formatTimeAgo"
import Image from '../Image/Image'
const NewsBanner = ({ item }) => {

  return (
    item? 
    <div className={s.banner}>
      <Image image={item?.image} />
          <h3 className={s.title}>{item.title}</h3>
        <p className={s.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
    </div> : null
  )
}

export default NewsBanner