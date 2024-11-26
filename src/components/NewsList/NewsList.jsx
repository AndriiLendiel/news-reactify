import React from 'react'
import s from './styles.module.css'
import NewsItem from '../NewsItem/NewsItem'
import withSkeleton from '../../helpers/hocs/withSkeleton'
export const NewsList = ({news}) => {
  return (
      <ul className={s.list}>
      {news?.map(el => {
        return <NewsItem key={el.id}item={el}/>
})}
    </ul>
  )
}
const NewsListWithSkeleton = withSkeleton(NewsList,'item', 10)

export default NewsListWithSkeleton