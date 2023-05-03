import { useState, useEffect } from 'react'
import { Box, Typography, Alert } from '@mui/material'
import { Videos } from '../components'
import { fetchCallAPI } from '../utilities/fetchCallAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const { searchTerm } = useParams()
  const [ videos, setVideos ] = useState([])
  const [ errors, setErrors ] = useState(null)
  useEffect(() => {
    fetchCallAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
        setErrors()
      })
      .catch((error) => setErrors(error))
  }, [searchTerm])
  
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex:'2'}}>
      <Typography 
        variant='h4'
        fontWeight="bold" mb={2} sx={{ color: 'white'}}>
        Search Results for: <span style={{ color: '#F31503'}}>{searchTerm} Videos</span>
      </Typography>
      { errors && <Alert severity="error">{errors}</Alert>}
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed