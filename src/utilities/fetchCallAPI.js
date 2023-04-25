const axios = require('axios');


const options = {
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'f187265ff7msh690d8f38bfaa5efp194c0djsn7d26ca9efcff',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}