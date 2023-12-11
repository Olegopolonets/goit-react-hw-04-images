import axios from 'axios';

const API_KEY = '40711128-36f054e20f11fdfe312beb589';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(userInput, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: userInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
    per_page: 12,
    page,
  });
  const res = await axios.get(`${BASE_URL}?${params}`);

  console.log(res.data);
  return res.data;
}
