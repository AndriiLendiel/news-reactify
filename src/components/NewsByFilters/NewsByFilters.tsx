import React from "react"
import s from './styles.module.css'
import { NewsList } from "../NewsList/NewsList"
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants"
import NewsFilters from "../NewsFilters/NewsFilters"
import { useDebounce } from "../../helpers/hooks/useDebounce"
import { useFetch } from "../../helpers/hooks/useFetch"
import { useFilters } from "../../helpers/hooks/useFilters"
import { getNews } from "../../api/apiNews"
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper"
import { NewsApiResponse, ParamsType } from "../../interfaces"



const NewsByFilters = () => {

  const {filters, changeFilters } = useFilters(
  {
  page_number: 1,
  page_size: PAGE_SIZE,
  category: null,
  keywords: ''
  })
  
  const debouncedKeywords = useDebounce(filters.keywords as string, 1500)


  const { data,  isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords
})
  
  
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
  
  const handlePageClick = (page_number: number) => {
    changeFilters('page_number',page_number)
  }

  return (
    <section className={s.section}>
      <NewsFilters filters={filters}
        changeFilters={changeFilters}/>

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}>

        <NewsList isLoading={isLoading} news={data?.news} />
        
      </PaginationWrapper>
    </section>
  )
}

export default NewsByFilters