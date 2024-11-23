import axios from 'axios'


// const BASE_URL = import.meta.env.VITE_NEWS_API_URL;
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://api.currentsapi.services/v1/'
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;


export const getNews = async (page_number =1, page_size=10) => {
    try {
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
