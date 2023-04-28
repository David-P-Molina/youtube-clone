import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchCallAPI } from '../utilities/fetchCallAPI'

const ChannelDetail = () => {
  const [ channelDetails, setChannelDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchCallAPI(`channels?part="snippet&id=${id}`)
    .then((data) => setChannelDetails(data))
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