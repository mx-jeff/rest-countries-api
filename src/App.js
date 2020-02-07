import React from 'react';

import AllFlags from './components/allFlags'
import Header from './components/header'
import FlagDetails from "./components/flag";

import './app.css'

function App() {

  return (
    <div className="app">
      <Header />
      <FlagDetails/>
    </div>
  )
}

export default App;
