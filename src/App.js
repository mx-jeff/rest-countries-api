import React, { useState } from 'react';

import Router from './routes'

import './App.css'
import './components/header/styles.css'

function App() {
  const [theme, setTheme] = useState(false)

  const color = changeTheme(theme)

  function changeTheme(theme){
    const isDark = theme;
    const color = isDark ? 'dark' : 'light'   
    return color
  }

  return (
    <div className={`app ${color}`}>
      <header>
        <h1>Where in the world?</h1>
        <button className="btn" onClick={() => setTheme(!theme)}>Change color</button>
      </header>
      
      <Router />
    </div>
  )
}

export default App;
