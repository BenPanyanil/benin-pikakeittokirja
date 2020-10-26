import React, { useContext, useState } from 'react'
import recipes from './recipes'

const RecipeContext = React.createContext()
const TransitionContext = React.createContext()

export function useRecipeContext() {
  return useContext(RecipeContext)
}

export function useTriggerTransition() {
  return useContext(TransitionContext)
}

export function RecipeProvider({ children }) {
  const [transition, setTransition] = useState(false)

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

  return (
    <TransitionContext.Provider value={transitionData}>
      <RecipeContext.Provider value={recipeData}>
        {children}
      </RecipeContext.Provider>
    </TransitionContext.Provider>
  )
}
