import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl, demoVideoUrl } from '../utilities/constants'

const VideoCard = ({ video: {id: { videoId }, snippet }}) => {
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
          alt={snippet?.title}
          sx={{ width: 360, height: 180}}
          />
      </Link>
      <CardContent
        sx={{ backgroundColor: '#2e2e2e', height: '86px' }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" color='#FFF' fontWeight="bold">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" color='#FFF' fontWeight="bold">
              {snippet?.channelTitle || demoChannelTitle }
              <CheckCircle sx={{  fontSize:12, color: 'gray', ml: '5px' }}/>
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard