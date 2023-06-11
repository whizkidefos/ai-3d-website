import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';

import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ title, type, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  
    const generatedStyles = (type) => {
      if (type === 'filled') {
        return {
          backgroundColor: snap.color,
          color: getContrastingColor(snap.color)
        }
      } else if(type === 'outline') {
        return {
          backgroundColor: 'transparent',
          borderWidth: '1px',
          color: snap.color,
          borderColor: snap.color
        }
      }
    }

  return (
    <button
        className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
        style={generatedStyles(type)}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton;