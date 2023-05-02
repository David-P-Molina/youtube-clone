import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchCallAPI } from '../utilities/fetchCallAPI';
import { Box } from '@mui/material'

const VideoDetail = () => {
  const { videoId } = useParams();
  return (
    <div>VideoDetail</div>
  )
}

export default VideoDetail