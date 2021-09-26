import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Workspaces from "./pages/Workspaces";
import HomePage from "./pages/Homepage";
import WorkspacePage from "./pages/workspacePage";
import ChatPage from "./pages/ChatPage"
const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />

          <div id="page-body">
            <Switch>
              <Route path="/workspace/:id" component={WorkspacePage}/>
              <Route path="/" component={HomePage} exact />
              <Route path="/workspaces" component={Workspaces} exact />
              <Route path="/chat" component={ChatPage} />
            </Switch>

          </div>
        </div>
      </Router>
    </>
  );
};
export default App;
