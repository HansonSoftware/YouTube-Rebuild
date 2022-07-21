import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import SearchPage from './SearchPage';

import './App.css';

// Imports for React Router for SearchBar
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>

        {/* Header always appears */}
        <Header/>

        <Switch>

        {/* Search Switch */}
          <Route path="/search/:searchTerm">
            <div className="App-Container">
                <Sidebar/>
                <SearchPage/>
              </div>
          </Route>
          
        {/* HomePage Switch */}
          <Route path="/">
              <div className="App-Container">
                <Sidebar/>
                <Videos/>
              </div>
          </Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;
