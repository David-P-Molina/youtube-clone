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
    const fetchDetails = async () => {
      const channelData = await fetchCallAPI(`channels?part=snippet&id=${id}`)
      setChannelDetails(channelData?.items[0])

      const videoData = await fetchCallAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      setVideos(videoData?.items)
    }
    fetchDetails()
  }, [id])
  

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 
            'linear-gradient(90deg, rgba(2, 81, 89,1) 0%, rgba(166, 116, 88,1) 100%, rgba(196, 238, 242,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}/>
        <ChannelCard channelDetail={channelDetails} marginTop='-95px'/>
      </Box>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail