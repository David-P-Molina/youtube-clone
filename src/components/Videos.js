import { Box, Stack } from '@mui/material'
import React from 'react'

const Videos = ({videos}) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={2}>
        {videos.map((item, id) => (
          <Box
            key={id}>
              {item.id.videoID && <VideoCard video={item}/>}
              {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        ))}
    </Stack>

  )
}

export default Videos