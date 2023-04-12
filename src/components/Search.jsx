const { useState } = React;
import searchYouTube from '../lib/searchYouTube.js';

var Search = ({setVideoList, setCurrentVideo}) => {
  const [query, setQuery] = useState('');

  const handleClick = function () {
    searchYouTube(query, function(data) {
      setVideoList(data);
      setCurrentVideo(data[0]);
    });
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(e) => setQuery(e.target.value)}/>
      <button className="btn hidden-sm-down" onClick={handleClick}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
