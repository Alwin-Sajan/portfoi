import React, { useState } from 'react'
import WelcomeScreen from './pages/WelcomeScreen';
import Home from './pages/Home';

const App = () => {
  const [loaded,setLoaded] = useState(false);
  return (
    <div>
      <WelcomeScreen/>
    </div>
  )
}

export default App