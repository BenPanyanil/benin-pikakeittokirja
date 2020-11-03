import React, { useEffect } from 'react'

import ItemCards from '../components/ItemCards'
import ShowReel from '../components/ShowReel'
import recipes from '../recipes'

export default function FrontPage() {
  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div>
      <ShowReel />
      <div className="p-side-6 mt-5">
        <h1>Kaikki reseptit</h1>
        <div className="item-pool grid">
          {recipes.map((item, i) => {
            return <ItemCards recipe={item} key={i} index={i} />
          })}
        </div>
      </div>
    </div>
  )
}