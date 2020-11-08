import React from 'react'
import ColorPicker from './ColorPicker'
import colorThemes from '../colorThemes'
import { useColorThemeContext } from '../Context'

export default function ColorThemePopup() {
  const { colorPopup, setColorPopup } = useColorThemeContext();

  return (
    <div>
      <div className={`popupBackground ${colorPopup && 'visible'}`} onClick={() => setColorPopup(false)}></div>
      <div className={`colorThemePopup ${colorPopup && 'visible'}`}>
        <h3 className="text-center">Valitse väriteema</h3>
        <div className="line mb-2" />
        <div className="fixed-grid">
          {colorThemes.map((item, i) => {
            return <ColorPicker key={i} index={i} name={item.name} primary={item.primary} secondary={item.secondary} background={item.background} />
          })}
        </div>
      </div>
    </div>
  )
}
