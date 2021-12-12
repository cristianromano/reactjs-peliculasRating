import React from "react";

import { GlobalStyle } from "./GlobalStyle";

import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from './components/NotFound';

// ROUTING

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const Star = ()=> React.createElement('div',null,"COMIENZO DE REACT")

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path = '/' element = {<Home></Home>}></Route>
      <Route path = '/:movieId' element = {<Movie></Movie>}></Route>
      <Route path = '/*' element = {<NotFound></NotFound>}></Route>
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
