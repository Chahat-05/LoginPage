import React from "react";
 import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import {Switch} from 'react-router-dom';
import Login from "./login";
import SignUp from "./signup";

function App() {
  return (
   
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
export default App;