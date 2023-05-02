import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from '../components'
import { fetchCallAPI } from '../utilities/fetchCallAPI'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchCallAPI(`search?part=snippet&q=${}`)
      .then((data) => {
        setVideos(data.items)
      })
      .catch((error) => console.log(error))
  }, [])
  
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex:'2'}}>
      <Typography 
        variant='h4'
        fontWeight="bold" mb={2} sx={{ color: 'white'}}>
        {selectedCategory} <span style={{ color: '#F31503'}}> Category Placeholder</span>
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed