import React, { useState } from 'react';
import { createCustomization } from '../api/api';

function CustomizationForm() {
  const [color, setColor] = useState('');
  const [accessory, setAccessory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomization({ color, accessory });
      alert('Customization created successfully!');
    } catch (error) {
      console.error('Error creating customization', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Customize Plushie</h1>
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Accessory"
        value={accessory}
        onChange={(e) => setAccessory(e.target.value)}
      />
      <button type="submit">Customize</button>
    </form>
  );
}

export default CustomizationForm;
