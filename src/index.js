import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; 

const API_KEY = 'AIzaSyDQ1PNjn2W3s-3SFcs8rHFqLlyJA-1ckFQ';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
  </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.root'));