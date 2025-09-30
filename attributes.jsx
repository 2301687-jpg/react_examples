import { createRoot } from 'react-dom/client'

function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);