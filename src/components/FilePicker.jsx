import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className='filepicker-container'>
      <div className="flex flex-col flex-1">
        <input 
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">Upload File</label>
        <p className="mt-2 text-xs text-gray-500 truncate">
          {file=== '' ? 'No file selected' : file.name}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        <CustomButton
          type='filled'
          title='Full'
          handleClick={() => readFile('full')}
          customStyles='text-xs py-1.5'
        />
        <CustomButton
          type='outline'
          title='Logo'
          handleClick={() => readFile('logo')}
          customStyles='text-xs py-1.5'
        />
      </div>
    </div>
  )
}

export default FilePicker;