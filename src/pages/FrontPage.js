import React, { useEffect, useState } from 'react'

import ItemCards from '../components/ItemCards'
import ShowReel from '../components/ShowReel'
import SearchBar from '../components/SearchBar'
import recipes from '../recipes'
import { useColorThemeContext } from '../Context'

export default function FrontPage() {
  const { colorTheme } = useColorThemeContext();
  let [search, setSearch] = useState('')

  useEffect(() => {
    sessionStorage.removeItem('servingSize')
    sessionStorage.removeItem('recipeState')
  }, [])

  const renderRecipes = recipes.filter(recipe => (
    recipe.dishname.toLowerCase().includes(search.toLowerCase())
    || recipe.time.includes(search.replace("min", ""))
    || recipe.tags.includes(search.toLowerCase())
  ))

  return (
    <div>
      <ShowReel />
      <SearchBar setSearch={setSearch} />
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