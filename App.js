import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Country from "./Country";

function App() {
  return (
    <Router>
      <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Filter />} />
        <Route exact path="/countries/:name" element={<Country />} />
      </Routes>
      <Countries />
      </>
    </Router>
  );
}

export default App;
