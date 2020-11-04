import React, { useContext, useState } from 'react'
import recipes from './recipes'

const RecipeContext = React.createContext()
const TransitionContext = React.createContext()
const ColorThemeContext = React.createContext()

export function useRecipeContext() {
  return useContext(RecipeContext)
}

export function useTriggerTransition() {
  return useContext(TransitionContext)
}

export function useColorThemeContext() {
  return useContext(ColorThemeContext)
}

export function ContextProvider({ children }) {
  const [transition, setTransition] = useState(false)
  const [colorPopup, setColorPopup] = useState(false)

  const handleRecipe = (index) => {
    localStorage.setItem('recipeState', index)
  }

  const handleServingSize = (value) => {
    localStorage.setItem('servingSize', value)
  }

  const recipeData = {
    recipes,
    handleRecipe,
    handleServingSize,
  }

  const transitionData = {
    transition,
    setTransition
  }

  const colorThemeData = {
    colorPopup,
    setColorPopup
  }

  return (
    <ColorThemeContext.Provider value={colorThemeData}>
      <TransitionContext.Provider value={transitionData}>
        <RecipeContext.Provider value={recipeData}>
          {children}
        </RecipeContext.Provider>
      </TransitionContext.Provider>
    </ColorThemeContext.Provider>
  )
}
