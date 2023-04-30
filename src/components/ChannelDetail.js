import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'
import { fetchCallAPI } from '../utilities/fetchCallAPI'

const ChannelDetail = () => {
  const [ videos, setVideos ] = useState([])
  const [ channelDetails, setChannelDetails ] = useState(null)

  useEffect(() => {
    const getVideos = fetchCallAPI()
    const getChannelDetails = fetchCallAPI
  }, [])
  

  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail