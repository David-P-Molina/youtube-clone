import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';

import { fetchCallAPI } from '../utilities/fetchCallAPI';
import { Video } from './'

const VideoDetail = () => {
  const { videoId } = useParams();
  return (
    <Box>

    </Box>
  )
}

export default VideoDetail