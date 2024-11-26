import React from "react"
import { formatDate } from "../../helpers/formatDate"
import s from './styles.module.css'
import BannersListrWithSkeleton from "../BannersList/BannersList"



const LatestNews = ({banners,isLoading}) => {
  return (
    <section className={s.section}>
      <BannersListrWithSkeleton banners={banners} isLoading={isLoading}  />
</section>
  )
}

export default LatestNews