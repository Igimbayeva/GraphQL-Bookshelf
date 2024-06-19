import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

const routerConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <SearchBooks /> },
      { path: '/saved', element: <SavedBooks /> }
    ]
  }
];

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
