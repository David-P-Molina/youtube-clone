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
    <Box minHeight="95vh">
      <Stack>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky',top: '85px'}}>
            <ReactPlayer />
          </Box>

        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail