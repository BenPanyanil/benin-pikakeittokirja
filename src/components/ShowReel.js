import React from 'react'
import recipes from '../recipes'

export default function ShowReel() {

  return (
    <div className="showReel">
      <div className="showItem">
        <img src={recipes[0].image} alt="show-1" />
      </div>
      <div className="showOverlay"></div>
      <div className="showContent p-side-6 mt-3">
        <p style={{ color: '#ffffff' }}>Päivän random resepti</p>
        <h1 style={{ color: '#EE4266' }}>Nuudeli</h1>
      </div>
    </div>
  )
}
