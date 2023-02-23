import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Team from "./Team";
import Tellus from "./Tellus";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Nav />
              <Outlet />
              {/* <Team /> */}
            </div>
          }
        >
          <Route path="/" element={<About />} />
          <Route path="/tellus" element={<Tellus />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
