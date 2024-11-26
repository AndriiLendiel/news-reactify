import React from "react"
import s from './styles.module.css'
import Pagination from "../Pagination/Pagination"
import { NewsList } from "../NewsList/NewsList"
import { TOTAL_PAGES } from "../../constants/constants"
import NewsFilters from "../NewsFilters/NewsFilters"


const NewsByFilters = ({
  isLoading,
  news,
  filters,
  changeFilters,

}) => {


  
  
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
    changeFilters('page_number',filters.page_number + 1)
    }
  }
  
  const handlePrevPage = () => {
    if (filters.page_number > 1) {
    changeFilters('page_number', filters.page_number - 1)
    }
  }
  
  const handlePageClick = (page_number) => {
    changeFilters('page_number',page_number)
  }






  return (
    <section className={s.section}>
      <NewsFilters filters={filters}
        changeFilters={changeFilters}/>

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES} />
      
      <NewsList isLoading={isLoading}
        news={news} />



      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.currentPage}
        totalPages={TOTAL_PAGES} />
    </section>
  )
}

export default NewsByFilters