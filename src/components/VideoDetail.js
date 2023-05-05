import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Stack, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './index'
import { fetchCallAPI } from '../utilities/fetchCallAPI';

const VideoDetail = () => {
  const { id } = useParams();
  const [ videoDetail, setVideoDetail ] = useState("")
  const [ videos, setVideos ] = useState([])
  
  useEffect(() => {
    fetchCallAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
    fetchCallAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
    }, [id]);
  
    if(!videoDetail?.snippet) return 'Loading...'
    const { snippet: {title, channelId, channelTitle, description }, statistics: { viewCount, likeCount } } = videoDetail;
  
  return (
    <Box minHeight="95vh">
      <Stack>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky',top: '85px'}}>
          <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#FFF" variant="h5" fontWeight="bold" padding={2}> 
              {title}
            </Typography>
            <Typography color="#FFF" variant="body2" padding={2} marginTop={-4}>
              {description}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#FFF' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant="subtitle1" sx={{ sm: 'subtitle1', md: 'h6'}} color="#FFF">
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px'}} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
        <Videos videos={videos} direction="column"/>
      </Box>
    </Box>
  )
}

export default VideoDetail