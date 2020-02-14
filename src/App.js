import React, { useEffect } from 'react';

import Router from './routes'
import Header from './components/header'

import './App.css'

function App() {

  useEffect(() => {
    document.title = 'Countries Api'
  }, [])

  return (
    <div className="app">
      <Header />
      <Router />
    </div>
  )
}

export default App;
