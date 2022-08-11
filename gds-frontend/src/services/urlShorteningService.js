import axios from 'axios';

const URL_SHORTENER_API = 'http://localhost:5001/api/shortenUrl';

export const urlShorteningService = async (payload) => {
  const res = await axios.post(URL_SHORTENER_API, payload);
  return res.data;
}
