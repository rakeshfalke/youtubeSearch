import React from 'react';
import { Item } from 'semantic-ui-react';

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
      <Item as='a' onClick={ () => onVideoSelect(video) }>
      <Item.Image size='tiny' src={imageUrl} />
      <Item.Content verticalAlign='middle'>{video.snippet.title}</Item.Content>
    </Item>
    );
};

export default VideoListItem;
