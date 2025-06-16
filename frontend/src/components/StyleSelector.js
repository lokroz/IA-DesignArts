import React from 'react';

const StyleSelector = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>Style de décoration :</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">-- Choisir un style --</option>
        <option value="moderne">Moderne</option>
        <option value="scandinave">Scandinave</option>
        <option value="classique">Classique</option>
        <option value="industriel">Industriel</option>
        <option value="minimaliste">Minimaliste</option>
      </select>
    </div>
  );
};

export default StyleSelector;