import React, { useState } from 'react';
import RoomSelector from './components/RoomSelector';
import StyleSelector from './components/StyleSelector';

const App = () => {
  const [roomType, setRoomType] = useState('');
  const [style, setStyle] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>IA DesignArts</h1>
      <RoomSelector value={roomType} onChange={setRoomType} />
      <StyleSelector value={style} onChange={setStyle} />
      {roomType && style && (
        <p>
          Vous avez choisi une <strong>{roomType}</strong> au style <strong>{style}</strong>.
        </p>
      )}
    </div>
  );
};

export default App;