import React from 'react'

import WelcomeScreen from './components/WelcomeScreen'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App" style={{
        backgroundColor:"black",
        minHeight:"100vh"
    }}>
      <WelcomeScreen/>
      <Footer/>
    </div>
  )
}

export default App;
