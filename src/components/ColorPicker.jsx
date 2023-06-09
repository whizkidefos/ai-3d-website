import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute ml-3 left-full'>
      <SketchPicker 
        color={snap.color}
        disableAlpha={true}
        onChangeComplete={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker;