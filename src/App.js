import React from 'react';
import Hexagoner from './Hexagoner';

const containerStyle = {
  margin: 0,
  width: '100%',
  minWidth: '520px', // should match canvas width
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const canvasStyle = {
  width: '520px',
  height: '300px',
};

const avatarSize = 100;
const iconSize = 50;

function App() {
  const props = {
    shapes: [
      {
        color: '#ffffff',
        src: './panna.jpg',
        width: avatarSize,
        height: avatarSize,
      },
      {
        color: '#e1306c',
        src: './instagram.png',
        width: iconSize,
        height: iconSize,
        url: 'https://www.instagram.com/miss.pannapanna/',
      },
      {
        color: '#171516',
        src: './github.png',
        width: iconSize,
        height: iconSize,
        url: 'https://github.com/pannachow',
      },
      {
        color: '#0274b3',
        src: './linkedin.png',
        width: iconSize,
        height: iconSize,
        url: 'https://www.linkedin.com/in/pannachow/',
      },
    ],
    primaryColor: '#fff',
    primaryText: 'PANNA CHOW',
    primaryFont: '30px Montserrat',
    secondaryText: 'Amsterdam, The Netherlands',
    secondaryFont: '18px Montserrat',
    canvasStyle,
  };

  return (
    <div style={containerStyle}>
      <Hexagoner {...props} />
    </div>
  );
}

export default App;
