const axios = require('axios');

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions'

const options = {
  url: BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}