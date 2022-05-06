import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23122721-ac4409033b31871735d6c9bbc';

export const pixabayFetchImage = (search, currentPage) => {
    return axios.get(`${BASE_URL}?q=${search}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.data.hits);
}
