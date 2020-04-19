import React, { useState, useEffect } from 'react';
import './App.css';
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime';
import List from './component/List.js';
import Details from './component/Details.js';

export default function App() {
  const url = process.env.REACT_APP_URL
  const [currentId, setCurrentId] = useState();

  const handleClick = (id) => {
    if (currentId !== id) {
      setCurrentId(id);
    }
  }

  return (
    <React.Fragment>
      <List url={url} onClickItem={handleClick} />
      {currentId && <Details url={url} dataId={currentId}/>}
    </React.Fragment>
  );
}
