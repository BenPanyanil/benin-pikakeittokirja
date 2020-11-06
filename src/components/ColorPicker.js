import React from 'react'
import { useColorThemeContext } from '../Context'

export default function ColorPicker({ name, primary, secondary, background, index }) {
  const { setThemeState, setColorPopup, handleThemeState } = useColorThemeContext();

  const handleButton = (index) => {
    setColorPopup(false)
    setThemeState(index)
    handleThemeState(index)
  }

  return (
    <div>
      <div className="colorPicker" onClick={() => handleButton(index)}>
        <div className="color" style={{ background: primary }}></div>
        <div className="color" style={{ background: secondary }}></div>
        <div className="color" style={{ background: background }}></div>
      </div>
      <p className='text-center my-05'>{name}</p>
    </div>
  )
}
