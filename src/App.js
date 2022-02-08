import React, { useState } from 'react';
import bulbON from './imgs/bulbOn.jpg';
import bulbOFF from './imgs/bulbOff.jpg';

function App() {
  let [bgcolor, setBgcolor] = useState(false);
  let [bulb, setBulb] = useState(false)

  const changeTheme = () => {
    setBgcolor(!bgcolor)
  }

  const changeBulb = () => {
    setBulb(!bulb)
  }

  return (
    <div style={{ backgroundColor: bgcolor ? 'black' : 'white', minHeight: '100vh' }}>
      <h1 style={{color: bgcolor?'white':'black'}}>Current theme: {bgcolor?'Dark theme':'Light theme'}</h1>
      <button style={{backgroundColor: 'white', borderRadius: '6px', padding: '8px',}} onClick={()=>changeTheme()}>Toggle Theme</button>
      <h1 style={{color: bgcolor?'white':'black'}}>Bulb is {bulb?'Off':'On'}</h1>
      <button style={{backgroundColor: 'white', borderRadius: '6px', padding: '8px',}} onClick={()=>changeBulb()}>Turn {bulb?'On':'Off'} Bulb</button>
      <br></br>
      <img src={bulb?bulbOFF:bulbON} alt='bulbImg'></img>
    </div>
  );
}

export default App;
