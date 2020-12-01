import React, { useEffect, useState } from 'react'

import ItemCards from '../components/ItemCards'
import ShowReel from '../components/ShowReel'
import SearchBar from '../components/SearchBar'
import recipes from '../recipes'
import { useColorThemeContext } from '../Context'

export default function FrontPage() {
  const { colorTheme } = useColorThemeContext();
  let [renderRecipes, setRenderRecipes] = useState(recipes)
  let [searchWord, setSearchWord] = useState([])

  useEffect(() => {
    sessionStorage.removeItem('servingSize')
    sessionStorage.removeItem('recipeState')
  }, [])

  useEffect(() => {
    if (searchWord.length === 0) {
      setRenderRecipes(
        recipes
      )
      return
    } else {
      let filteredRecipes = []
      const reservedIDs = []

      recipes.forEach(recipe => {
        searchWord.forEach(word => {
          let wroughtWord = word.toLowerCase().replace(/\s/g, '')

          if (recipe.tags.includes(wroughtWord)) {
            if (reservedIDs.includes(recipe.id)) {
              return
            } else {
              filteredRecipes.push(recipe)
              reservedIDs.push(recipe.id)
            }
          }
        })
      })

      setRenderRecipes(
        filteredRecipes
      )
    }
    // eslint-disable-next-line
  }, [searchWord])


  return (
    <div>
      <ShowReel />
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
      <div className="p-side-6 mt-4">
        <h1 style={{ color: colorTheme.secondary }}>{renderRecipes.length === 0 ? 'Reseptiä ei löydy' : 'Kaikki reseptit'}</h1>
        <div className="item-pool grid">
          {renderRecipes.map((item, i) => (
            <ItemCards recipe={item} key={i} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}