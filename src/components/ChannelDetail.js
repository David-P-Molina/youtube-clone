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
    <Box>
      <ChannelCard channelDetail={channelDetails}/>
      <Videos videos={videos}/>
    </Box>
  )
}

export default ChannelDetail