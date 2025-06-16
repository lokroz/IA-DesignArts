import React from 'react';

const RoomSelector = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>Type de pièce :</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">-- Choisir une pièce --</option>
        <option value="salon">Salon</option>
        <option value="cuisine">Cuisine</option>
        <option value="chambre">Chambre</option>
        <option value="salle_de_bain">Salle de bain</option>
        <option value="bureau">Bureau</option>
      </select>
    </div>
  );
};

export default RoomSelector;
