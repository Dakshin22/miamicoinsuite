import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import ChatConversation from "./pages/ChatConversation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Workspaces from "./pages/Workspaces";
import HelperChat from "./components/HelperChat";
const App = () => {

  return (
    <>
    
      <Router>
        <div className="App">
          
          <Navbar />
          
          <div id="page-body">
            <Switch>
            
              <Route path="/" component={Workspaces} exact />
            </Switch>
          </div>
          
        </div>
      </Router>
    </>
  );
};
export default App;
