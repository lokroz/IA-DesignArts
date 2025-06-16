import React from 'react';

export default function ResultViewer({ data }) {
  return (
    <div>
      <h2>Résultat</h2>
      <img src={data.image_url} alt="Décoration générée" style={{ maxWidth: '100%' }} />
      <h3>Références utilisées :</h3>
      <ul>
        {data.references.map((item, index) => (
          <li key={index}>{item.nom} - {item.prix}€</li>
        ))}
      </ul>
    </div>
  );
}
