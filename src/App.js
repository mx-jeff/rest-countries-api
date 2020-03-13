import React from 'react';

import Router from './routes'
import Header from './components/header'

import './App.css'

function App() {
  return (
    <div className="app dark">
      <Header />
      <Router />
    </div>
  )
}

export default App;
