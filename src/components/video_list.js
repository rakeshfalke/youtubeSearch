import React from 'react';
import VideoListItem from './video_list_item';
import { Item } from 'semantic-ui-react';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
            key={video.etag}
            onVideoSelect={props.onVideoSelect}
            video={video} />
  });
  return (
    <Item.Group divided>
      {videoItems}
    </Item.Group>
  );
}

export default VideoList;
