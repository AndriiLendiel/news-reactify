import { useState, useEffect } from "react"

export const useFetch = (fetchFunction, params) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setIsError] = useState(false)
    const stringParams = params ?
        new URLSearchParams(params).toString(): ''

    useEffect(() => {
        (async () => {
        try {
            setIsLoading(true)
            const result = await fetchFunction(params)
            setData(result)
        } catch (error) {
            setIsError(error)
        } finally {
            setIsLoading(false)
        }
    })()
    }, [fetchFunction, stringParams])
    
    return {data, isLoading, error}
}




//   const fetchNews = async (currentPage) => {
//       try {
//         setIsLoading(true)
//         const response = await getNews({
//           page_number: currentPage,
//           page_size: PAGE_SIZE,
//           category: selectedCategory === 'All' ? null : selectedCategory,
//           keywords: debouncedKeywords
//         });
//         setNews(response.news)
//         setIsLoading(false)
//       } catch (error) {
//         console.log(error)
//       }
//   };


//     const fetchCategories = async () => {
//       try {
//         const response = await getCategories();
//         setCategories(['All', ...response.categories])
//       } catch (error) {
//         console.log(error)
//       }
//   };

//   useEffect(() => {
//     fetchCategories()
//   }, [])

//   useEffect(() => {
//       fetchNews(currentPage)
//   }, [currentPage, selectedCategory,debouncedKeywords])
