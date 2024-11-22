import React from "react"
import { useEffect,useState } from "react"
import styles from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import { getCategories, getNews } from "../../api/apiNews"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"
import Pagination from "../../components/Pagination/Pagination"
import Categories from "../../components/Categories/Categories"

const Main = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)


  const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')



  const totalPages = 10
  const pageSize = 10
  const fetchNews = async (currentPage) => {
      try {
        setIsLoading(true)
        const response = await getNews({
          page_number: currentPage,
          page_size: pageSize,
          category: selectedCategory === 'All'? null : selectedCategory
        });
        setNews(response.news)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
  };
  

    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(['All', ...response.categories])

      } catch (error) {
        console.log(error)
      }
  };
  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
      fetchNews(currentPage)
  }, [currentPage, selectedCategory])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
    setCurrentPage(currentPage+1)
  }
  }
  
    const handlePrevPage = () => {
    if (currentPage > 1) {
    setCurrentPage(currentPage-1)
  }
}

  const handlePageClick = (page_number) => {
    setCurrentPage(page_number)
  }

  return (
    <main className={styles.main}>main
      <Categories categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
    />
      {news.length > 0 && !isLoading?
        <NewsBanner item={news[0]} /> : 
        <Skeleton count={1} type={'banner'} />
      }

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
        totalPages={totalPages} />
      
      {!isLoading ? <NewsList news={news} /> :
      <Skeleton count={10} type={'item'} />
      }

          <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
        totalPages={totalPages} />
    </main>
  )
}

export default Main