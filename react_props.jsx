import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);

// example 2

import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" />
);