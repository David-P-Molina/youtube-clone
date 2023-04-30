import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail