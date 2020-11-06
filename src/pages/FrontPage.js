import React, { useEffect } from 'react'

import ItemCards from '../components/ItemCards'
import ShowReel from '../components/ShowReel'
import recipes from '../recipes'
import { useColorThemeContext } from '../Context'

export default function FrontPage() {

  const { colorTheme } = useColorThemeContext();


  useEffect(() => {
    localStorage.removeItem('servingSize')
    localStorage.removeItem('recipeState')
  }, [])

  return (
    <div>
      <ShowReel />
      <div className="p-side-6 mt-4">
        <h1 style={{ color: colorTheme.secondary }}>Kaikki reseptit</h1>
        <div className="item-pool grid">
          {recipes.map((item, i) => {
            return <ItemCards recipe={item} key={i} index={i} />
          })}
        </div>
      </div>
    </div>
  )
}