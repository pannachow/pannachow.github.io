import React from 'react';
import Hexagoner from './Hexagoner';

const bgStyle = {
  margin: 0,
  width: '100%',
  height: '100%',
};

const centerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function App() {
  const props = {
    shapes: [
      { color: '#fff', src: './panna.jpg', width: 96, height: 96 },
      {
        color: 'white',
        src: './instagram.png',
        width: 60,
        height: 60,
        url: 'https://www.instagram.com/miss.pannapanna/',
      },
      {
        color: '#171516',
        src: './github.png',
        width: 60,
        height: 60,
        url: 'https://github.com/pannachow',
      },
      {
        color: '#0274b3',
        src: './linkedin.png',
        width: 60,
        height: 60,
        url: 'https://www.linkedin.com/in/pannachow/',
      },
    ],
    font: 'Montserrat',
    primaryColor: '#fff',
    primaryText: 'PANNA CHOW',
    secondaryText: 'Amsterdam, The Netherlands',
  };

  return (
    <div style={bgStyle}>
      <div style={centerStyle}>
        <Hexagoner {...props} />
      </div>
    </div>
  );
}

export default App;
