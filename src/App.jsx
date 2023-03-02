import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/About";
import Tellus from "./pages/Tellus";
import Load from "./pages/Load";
import Result from "./pages/Result";
import Site from "./pages/Site";

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
            </div>
          }
        >
          <Route path="/" element={<About />} />
          <Route path="/tellus" element={<Tellus />} />
          <Route path="/load" element={<Load />} />
          <Route path="/result" element={<Result />} />
          <Route path="/site" element={<Site />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
