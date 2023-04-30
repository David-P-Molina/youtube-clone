import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'

const ChannelDetail = () => {
  const [ videos, setVideos ] = useState([])
  const [ channelDetails, setChannelDetails ] = useState(null)
  
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail