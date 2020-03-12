import React from 'react';

import Router from './routes'
import Header from './components/header'

import './app.css'

function App() {
  return (
    <div className="app light">
      <Header />
      <Router />
    </div>
  )
}

export default App;
