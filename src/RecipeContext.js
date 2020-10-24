import React, { useContext, useState } from 'react'
import recipes from './recipes'

const SetRecipeContext = React.createContext()
const RecipeContext = React.createContext()

export function useSetRecipe() {
  return useContext(SetRecipeContext)
}

export function useRecipe() {
  return useContext(RecipeContext)
}

export function RecipeProvider({ children }) {
  let [recipeState, setRecipeState] = useState(0)

  const setRecipe = (index) => {
    setRecipeState(recipeState = index)
  }

  const recipe = recipes[recipeState]

  return (
    <SetRecipeContext.Provider value={setRecipe}>
      <RecipeContext.Provider value={recipe}>
        {children}
      </RecipeContext.Provider>
    </SetRecipeContext.Provider>
  )
}
