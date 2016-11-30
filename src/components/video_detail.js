import React from 'react';
import { Embed, Container, Header } from 'semantic-ui-react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(url);
  return (
      <Container>
      <Header as='h2'>{video.snippet.title}</Header>
      <Embed
        id={videoId}
        autoplay={false}
        brandedUI={false}
        source='youtube'
      />
      <p>{video.snippet.description}</p>
      </Container>
    );
}

export default VideoDetail;
