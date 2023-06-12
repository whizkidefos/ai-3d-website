import React from 'react';
import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Enter a prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={5}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type='outline'
            text='Generating...'
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton 
              type='outline'
              title='AI Logo'
              handleClick={() => handleSubmit('logo')}
              customStyles='text-xs py-1'
            />
            <CustomButton 
              type='filled'
              title='AI Full'
              handleClick={() => handleSubmit('full')}
              customStyles='text-xs py-1'
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker;