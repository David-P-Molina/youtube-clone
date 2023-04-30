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
      const data = await fetchCallAPI(`channels?part=snippet&id=${id}`)
      console.log(data.items[0])
      setChannelDetails(data?.items[0])
    }
    fetchDetails()
    // const getVideos = fetchCallAPI()
    // const getChannelDetails = fetchCallAPI
  }, [id])
  

  return (
    <Box>
      <ChannelCard channelDetail={channelDetails}/>
      {/* <Videos /> */}
    </Box>
  )
}

export default ChannelDetail