import React from 'react'
import {Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utilities/constants'


const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: { xs: '356px', md: '320px' },
      margin: 'auto',
    }}>
      <Link to={`/channel/${ channelDetail?.id?.channelId }`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF'}}>
          <CardMedia
            image={ channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
            alt={ channelDetail?.snippet?.title }
            sx={{ 
              borderRadius: '50%', 
              height: '180px', 
              width: '180px', 
              mb: 2, 
              border: '1px solid #E3E3E3'}}
            />
          <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: "12", color: 'gray', ml: '5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="h6" sx={{ color: 'gray' }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard