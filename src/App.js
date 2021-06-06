import React from 'react'
import logo from './logo.png'

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'roboto',
    }}>
      <img src={logo} alt="Test Logo" style={{
        height: '100px',
        width: '100px',
        margin: 0
      }}/>
      <h1 style={{
        color: '#6EC177',
        margin: 0,

      }}>Hello, Coming Soon</h1>
      <p>What's Up, Coming Soon</p>
    </div>
  )
}

export default App