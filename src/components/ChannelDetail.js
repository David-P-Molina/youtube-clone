import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchCallAPI } from '../utilities/fetchCallAPI'

const ChannelDetail = () => {
  const [ channelDetails, setChannelDetails ] = useState(null);
  const [ videoDetails, setVideoDetails ] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchCallAPI(`channels?part="snippet&id=${id}`)
    .then((data) => setChannelDetails(data))
    fetchCallAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideoDetails(data))
  }, [id])
  return (
    <Box>
      {id}
      {/* <Videos />
      <ChannelCard /> */}
    </Box>
  )
}

export default ChannelDetail