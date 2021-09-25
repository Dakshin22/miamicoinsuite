import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Navbar";
import ChatConversation from "./pages/ChatConversation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={ChatConversation} exact />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};
export default App;
