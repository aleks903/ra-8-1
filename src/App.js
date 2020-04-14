import React, { useState, useEffect } from 'react';
import './App.css';
// eslint-disable-next-line
import regeneratorRuntime from 'regenerator-runtime';
import List from './component/List.js';
import Details from './component/Details.js';

export default function App() {
  const url = process.env.REACT_APP_URL
  const [list, setList] = useState([]);
  const [details, setDetails] = useState({});
  const [currentFetch, setCurrentFetch] = useState({
    state: setList,
    itemUrl: `${url}users.json`,
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log('effect');
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(currentFetch.itemUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        currentFetch.state(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }

    };
    fetchData();
  }, [currentFetch]);

  const handleClick = (id) => {
    if(id !== details.id) {
      setList(prevList => prevList.map((item) => {
        let activeItem = false;
        if (item.id === id) {
          activeItem = true;
        }
        return {
          id: item.id,
          name: item.name,
          active: activeItem,
        };
      }))

      setCurrentFetch({
        state: setDetails,
        itemUrl: `${url}${id}.json`,
      });
    }
  }

  return (
    <React.Fragment>
      {isLoading && <p className="loading">Loading...</p>}
      <List data={list} onClickItem={handleClick} />
      {details.id && <Details data={details} />}
    </React.Fragment>
  );
}