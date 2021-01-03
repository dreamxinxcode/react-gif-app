import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Search.jsx';
import Gif from './Gif.jsx';
import Random from './Random.jsx';

function App() {
  const [gif, setGif] = useState({});
  
  useEffect(() => {
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=oGnUCAAjeVgYQ3EwXDXGyEvl4qQKSW3T&tag=&rating=r')
    .then(res => {
      setGif(res.data.data);
      console.log('gifff', gif.title)
    })
  }, []);

  return (
    <div className="App">
      <Search />
      <Gif rating={gif.rating} username={gif.username} url={gif.images.downsized_large.url} />
      <Random />
    </div>
  );
}

export default App;
