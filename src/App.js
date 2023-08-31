import './App.css';
import React, { useEffect, useRef, useState } from 'react';

const clientID = "t-FQWYk2PUt13LidWIblzu7SNd9HVOQsK3QA7Lg1Mg4";
const utm = "?utm_source=scrimba_degree&utm_medium=referral";

const loadData = async (options) => {
  const response = await fetch(options.url);
  const data = await response.json();
  if (options.onSuccess) options.onSuccess(data);
};

function App(props) {
  const [photos, setPhotos] = useState([]);
  const queryInput = useRef(null);
  const numberInput = useRef(null);

  const [query, setQuery] = useState("earth");
  const [numberOfPics, setNumberOfPics] = useState(10);

  const url = `https://api.unsplash.com/photos/random/?count=${numberOfPics}&client_id=${clientID}`;

  useEffect(() => {
    const photosUrl = query ? `${url}&query=${query}` : url;
    loadData({
      url: photosUrl,
      onSuccess: res => {
        setPhotos(res);
      }
    });
  }, [query, url]);

  const searchPhotos = e => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };

  const handleNumberChange = () => {
    setNumberOfPics(numberInput.current.value || 4);
  };

  return (
    <div className="box">
      <h2>{props.emoji}</h2>
      <h1>{props.name}'s website</h1>
      <input
        type="text"
        placeholder="Enter your search"
        ref={queryInput}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Enter a number"
        ref={numberInput}
        onChange={handleNumberChange}
        className="input-field"
      />
      <button type="button" className="search-button" onClick={searchPhotos}>Generate</button>
      <div className="grid">
        {query && photos.map(photo => (
          <div key={photo.id} className="item">
            <img
              className="img"
              alt="favPic"
              src={photo.urls.regular}
            />
            <div className="caption">
              <span className="credits">
                Photo by <a href={photo.user.links.html + utm}>{photo.user.name}</a>
                <span> on </span>
                <a href={"https://unsplash.com" + utm}>Unsplash</a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
