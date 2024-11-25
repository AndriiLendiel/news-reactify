import React from 'react'
import s from './styles.module.css'
import NewsItem from '../NewsItem/NewsItem'
export const NewsList = ({news}) => {
  return (
      <ul className={s.list}>
      {news.map(el => {
        return <NewsItem key={el.id}item={el}/>
})}
    </ul>
  )
}

export default NewsList