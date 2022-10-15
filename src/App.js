import React, {Component} from "react";

import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from "./SearchPage";

class App extends Component {

  render() {
    return (
      <div className="app">
        <Router>

          <Header />

          
          <Switch>
            <Route path="/search">
            <SearchPage />

            </Route>

            <Route path="/">
              {/* Home */}
              <Home />

            </Route>




          </Switch>
          <Footer />
        </Router>
            {/* header  */}
        
            {/* banner */}

            {/* Cards */}

            {/* Footer */}

        {/* Search Page */}
        
      </div>
      
    );
  }
}

export default App;