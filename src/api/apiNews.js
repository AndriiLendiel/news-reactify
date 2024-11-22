import axios from 'axios'


// const BASE_URL = import.meta.env.VITE_NEWS_API_URL;
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://api.currentsapi.services/v1/'
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
console.log(import.meta);
console.log();

export const getNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
