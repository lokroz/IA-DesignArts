import React from 'react';

export default function ImageUpload({ onChange }) {
  return (
    <div>
      <label>Image de la pièce:</label>
      <input type="file" accept="image/*" onChange={e => onChange(e.target.files[0])} />
    </div>
  );
}
