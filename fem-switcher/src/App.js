import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";

// const url = "https://restcountries.com/v3.1/all";

function App() {
  return (
    <div>
      <Header/>
      <Filter/>
    <Countries/>
    </div>
  );
}

export default App;
