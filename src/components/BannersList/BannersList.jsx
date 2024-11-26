import React from "react"
import s from './styles.module.css'
import { formatTimeAgo } from "../../helpers/formatTimeAgo"
import Image from '../Image/Image'
import withSkeleton from "../../helpers/hocs/withSkeleton"
import NewsBanner from "../NewsBanner/NewsBanner"
const BannersList = ({ banners }) => {
  return (
  
    <ul className={s.banners}>
      {banners?.map(el => {
        return (
          <NewsBanner key={el.id} item={el} />
        )
      })}
</ul>
  )

}

const BannersListrWithSkeleton = withSkeleton(BannersList,'banner', 10, 'row')
export default BannersListrWithSkeleton