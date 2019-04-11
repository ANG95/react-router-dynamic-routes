import React from 'react';

const Topic = ({ location }) => (
  <div>
    <h1>{location.state.name}</h1>
    <h2>{location.state.email}</h2>
    <h3>{location.state.about}</h3>
  </div>
)

export default Topic;