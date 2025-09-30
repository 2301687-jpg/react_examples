import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import Fruits from './Fruits';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Fruits />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);