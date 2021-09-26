import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Workspaces from "./pages/Workspaces";
import WorkspacePage from './pages/workspacePage';
const App = () => {

  return (
    <>
    
      <Router>
        <div className="App">
          
          <Navbar />
          
          <div id="page-body">
            <Switch>
            
              <Route path="/" component={Workspaces} exact />
              <Route path="/workspace/:id" component={WorkspacePage} exact />
            </Switch>
          </div>
          
        </div>
      </Router>
    </>
  );
};
export default App;
