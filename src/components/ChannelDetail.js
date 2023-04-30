import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchCallAPI } from '../utilities/fetchCallAPI'

const ChannelDetail = () => {
  const [ videos, setVideos ] = useState([])
  const [ channelDetails, setChannelDetails ] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getVideos = fetchCallAPI()
    const getChannelDetails = fetchCallAPI
  }, [id])
  

  return (
    <Box>
      <ChannelCard/>
      <Videos />
    </Box>
  )
}

export default ChannelDetail