import { createRoot } from 'react-dom/client';
import './MyStyle.scss';

function MyHeader() {
  return (
    <h1>My Header</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <MyHeader />
);