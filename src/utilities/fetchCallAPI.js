import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchCallAPI = async (url) => {
  const { data } = await axios.get( `${BASE_URL}/${url}`, options);
  return data
}