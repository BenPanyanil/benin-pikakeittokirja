import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecipeContext } from '../Context';
import { useTriggerTransition } from '../Context'
import { useColorThemeContext } from '../Context'
import { FaRandom } from 'react-icons/fa'

export default function ShowReel() {
  let history = useHistory()
  const { recipes, handleRecipe } = useRecipeContext()
  const { setTransition } = useTriggerTransition()
  const { colorTheme } = useColorThemeContext();
  let x = window.matchMedia("(max-width: 1000px)")

  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(recipes.length));
  }

  const [randomInt, setRandomInt] = useState(getRandomInt())
  let recipe = recipes[randomInt];


  const handleButton = (index, x) => {
    handleRecipe(index)
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if (x.matches) {
      history.push("/annoskoko")
    } else {
      setTimeout(() => {
        history.push("/annoskoko")
      }, 500)
      setTimeout(() => {
        setTransition(false)
      }, 1000)
      setTransition(true)
    }
  }

  const handleRandom = () => {
    while (true) {
      const number = getRandomInt()
      if (number !== randomInt) {
        setRandomInt(number)
        break
      } else {
        continue
      }
    }
  }

  return (
    <div className="showReel">
      <div className="showItem">
        <img src={recipe.image} alt="show-1" />
      </div>
      <div className="showOverlay"></div>
      <div className="showContent p-side-6 mt-3">
        <p style={{ color: '#ffffff' }}>Päivän random resepti</p>
        <h1 style={{ color: colorTheme.primary }}>{recipe.dishname}</h1>
        <div className="flex">
          <button className="show-btn flex align-center" onClick={() => handleButton(randomInt, x)}>Katso resepti</button>
          <button className="show-btn flex align-center" onClick={() => handleRandom()}><FaRandom /></button>
        </div>
      </div>
    </div>
  )
}
