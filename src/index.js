import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { Segment } from 'semantic-ui-react';

const API_KEY = 'AIzaSyBPLyUUpkeAFWVvjSiHayr8RlZsPiiZt2k';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo:null };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({ videos:videos, selectedVideo:videos[0] });
      //this.setState({ videos:videos }); as videos is there in place of data
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
     <Segment.Group>
     <Segment><SearchBar onSearchTermChange={videoSearch}/></Segment>
      <Segment.Group horizontal>
      <Segment><VideoDetail video={this.state.selectedVideo} /></Segment>
      <Segment>
        <VideoList
        onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </Segment>
    </Segment.Group>
  </Segment.Group>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
