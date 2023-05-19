// import logo from './logo.svg';
import Recuperar from './app/Pages/Recuperar';
import Ingresar from './app/Pages/Ingresar'
import JuanPablo from './app/Pages/JuanPablo'
import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          {/* <Route exact path="/Login">
            <Login />
          </Route> */}
          <Route exact path="/" element={<JuanPablo/>}/>
          
          <Route exact path="/JuanPablo" element={<JuanPablo/>}/>
          <Route exact path="/recuperar" element={<Recuperar/>}/>
          <Route exact path="/ingresar" element={<Ingresar/>}/>
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;