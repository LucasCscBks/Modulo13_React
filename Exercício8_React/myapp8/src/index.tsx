import ReactDOM from 'react-dom/client';
import Render from './components/render';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( <Render /> );
