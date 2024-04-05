import axios from 'axios';

export async function getImage(value, currentPage) {
  const KEY = '43233624-a5a6de2690d501056695f3e05';
  const url = 'https://pixabay.com/api/';

  const params = {
    key: KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    page: currentPage,
    per_page: 15,
    safesearch: true,
  };

  const res = await axios.get(url, { params });
  return res.data;
}