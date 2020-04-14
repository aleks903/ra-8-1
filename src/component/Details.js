import React from 'react';

export default function Details(props) {
  const { data } = props;
  console.log('renders');
  return (
    <div id={data.id} className="details">
      <img src={data.avatar} />
      <p className="name">{data.name}</p>
      <p>City: {data.details.city}</p>
      <p>Company: {data.details.company}</p>
      <p>Position: {data.details.position}</p>
    </div>
  );
}