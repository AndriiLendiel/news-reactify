import React from "react"
import { useFetch } from "../../helpers/hooks/useFetch"
import s from './styles.module.css'
import { getCategories } from "../../api/apiNews"
import Categories from "../Categories/Categories"
import Search from "../Search/Search"

const NewsFilters = ({filters, changeFilters}) => {
    const {data: dataCategories} = useFetch(getCategories)
  return (
      <div className={s.filters}>
          {dataCategories ? (
        <Categories
        categories={dataCategories.categories}
        setSelectedCategory={(category) => changeFilters('category',category)}
        selectedCategory={filters.category}
      />) : null}
      <Search keywords={filters.keywords}
        setKeyWords={(keywords) => changeFilters('keywords',keywords)} />
      
    </div>
  )
}

export default NewsFilters