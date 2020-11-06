import React from 'react'
import { useColorThemeContext } from '../Context'

export default function Footer() {
  const { colorTheme } = useColorThemeContext();
  return (
    <footer style={{ background: colorTheme.background }}>
      <span>Made by Ben Panyanil</span>
    </footer>
  )
}
