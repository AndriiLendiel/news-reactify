import { useState, useEffect } from "react"


interface FetchFunction<P, T>{
    (params?:P): Promise<T>
}

interface UseFetchResult<T>{
    data: T | null | undefined;
    isLoading: boolean;
    error: Error | null;
    
}

export const useFetch =<T,P> (fetchFunction: FetchFunction<P,T>, params?:P) => {
    const [data, setData] = useState<T|null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setIsError] = useState<Error|null>(null)
    const stringParams = params ?
        new URLSearchParams(params).toString(): ''

    useEffect(() => {
        (async () => {
        try {
            setIsLoading(true)
            const result = await fetchFunction(params)
            setData(result)
        } catch (error) {
            setIsError(error as Error)
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
