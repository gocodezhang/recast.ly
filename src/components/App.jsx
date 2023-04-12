import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

const { useState } = React;
const { useEffect } = React;

var App = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);

  useEffect(function () {
    searchYouTube('react', function(data) {
      setVideoList(data);
      setCurrentVideo(data[0]);


    });
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><Search setVideoList={setVideoList} setCurrentVideo={setCurrentVideo} /></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><VideoPlayer video={currentVideo} /></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><VideoList videos={videoList} func={setCurrentVideo} /></h5></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
