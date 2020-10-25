import React, { useContext, useState } from 'react'
import recipes from './recipes'

const RecipeContext = React.createContext()

export function useRecipeContext() {
  return useContext(RecipeContext)
}

export function RecipeProvider({ children }) {
  let [recipeState, setRecipeState] = useState(0)
  let [servingSize, setServingSize] = useState(1)

  const handleRecipe = (index) => {
    setRecipeState(recipeState = index)
  }

  const handleServingSize = (value) => {
    setServingSize(servingSize = value)
  }

  const recipe = recipes[recipeState]

  const data = {
    recipe,
    handleRecipe,
    servingSize,
    handleServingSize
  }

  return (
    <RecipeContext.Provider value={data}>
      {children}
    </RecipeContext.Provider>
  )
}
