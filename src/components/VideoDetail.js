import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';

import { fetchCallAPI } from '../utilities/fetchCallAPI';

const VideoDetail = () => {
  const { id } = useParams();
  const [ videoDetail, setVideoDetail ] = useState("")
  useEffect(() => {
    fetchCallAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
    }, [id]);
    if(!videoDetail?.snippet) return 'Loading...'
    const { snippet: {title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky',top: '85px'}}>
          <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#FFF" variant="h5" fontWeight="bold" padding={2}> 
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#FFF' }} py={1} px={2}>
              <Link to={`channel/${channelId}`}>
                <Typography>
                  {channelTitle}
                </Typography>
              </Link>
            </Stack>
          </Box>

        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail