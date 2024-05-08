import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import '../../../main.css'; // Import main.css from the components folder level

const SwitchTheme = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  // Change body background color based on switch state
  document.body.style.backgroundColor = checked ? 'black' : 'white';
  document.body.style.color = checked ? 'white' : 'black'; // Optional: Change text color

  return (
    <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      
    </div>
  );
};

export default SwitchTheme;


