import React from 'react'
import ColorPicker from './ColorPicker'
import { useColorThemeContext } from '../Context'

export default function ColorThemePopup() {
  const { colorPopup, setColorPopup } = useColorThemeContext();

  console.log(colorPopup)
  return (
    <div>
      <div className={`popupBackground ${colorPopup && 'visible'}`} onClick={() => setColorPopup(false)}></div>
      <div className={`colorThemePopup ${colorPopup && 'visible'}`}>
        <h3>Valitse väriteema</h3>
        <div className="line" />
        <div className="grid">
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
          <ColorPicker />
        </div>
      </div>
    </div>
  )
}
