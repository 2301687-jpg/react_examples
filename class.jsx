import React from 'react';
import { createRoot } from 'react-dom/client'

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

createRoot(document.getElementById('root')).render(
  <Car />
);

// example 2

import React from 'react';
import { createRoot } from 'react-dom/client'

class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Garage />
);