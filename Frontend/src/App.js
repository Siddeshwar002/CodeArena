import React from "react";

import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./home/pages/Home.jsx";
import PostFeed from "./PostFeed/Pages/PostFeed.jsx";
import QueryFeed from "./QueryFeed/Pages/QuereyFeed"
// import Login from "./login/pages/Login.jsx"
// import Signup from "./Signup/pages/Signup.jsx";

const App = () => {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/PostFeed">
        <PostFeed />
      </Route>

      <Route path="/QueryFeed">
        <QueryFeed />
      </Route>

      {/* <Route path="/Login">
        <Login />
      </Route>

      <Route path="/Signup">
        <Signup />
      </Route> */}
    </Router>
  );
}

export default App;
