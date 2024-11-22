import React from 'react'
import styles from './styles.module.css'
import NewsItem from '../NewsItem/NewsItem'
export const NewsList = ({news}) => {
  return (
      <ul className={styles.list}>
      {news.map(el => {
        return <NewsItem key={el.id}item={el}/>
})}
    </ul>
  )
}

export default NewsList