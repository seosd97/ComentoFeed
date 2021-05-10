import axios from 'axios';

const endpoint = "https://problem.comento.kr";

axios.defaults.headers.common['Accept'] = 'application/json';

export const getArticles = async (page, limit, category = [], ord='asc') => {
  const categoryQuery = category.map(c => `category[]=${c}`).join('&');
  const { data } = await axios.get(`${endpoint}/api/list?page=${page}&limit=${limit}&ord=${ord}&${categoryQuery}`);
  return data
};

export const getCategory = async () => {
  const { data } = await axios.get(`${endpoint}/api/category`);
  return data
}

export const getAds = async (page, limit) => {
  const { data } = await axios.get(`${endpoint}/api/ads?page=${page}&limit=${limit}`);
  return data;
}

export const getView = async (id) => {
  const { data } = await axios.get(`${endpoint}/api/view?id=${id}`);
  return data;
}
