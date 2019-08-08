import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AntDesign from './pages/AntDesign';
import MaterialUi from './pages/MaterialUi';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className='navbar'>
            <ul className='navbar__list'>
              <li>
                <Link to="/">Ant Design</Link>
              </li>
              <li>
                <Link to="/materialui/">Material UI</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={AntDesign} />
          <Route path="/materialui/" component={MaterialUi} />
        </div>
      </Router>
    </div>
  );
}

export default App;
