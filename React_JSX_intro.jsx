import { createRoot } from 'react-dom/client'

const myElement = <h1>I Love JSX!</h1>;

createRoot(document.getElementById('root')).render(
  myElement
);

// example 2

import { createRoot } from 'react-dom/client'

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

createRoot(document.getElementById('root')).render(
  myElement
);