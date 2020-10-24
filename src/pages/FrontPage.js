import React from 'react'

import ItemCards from '../components/ItemCards'
import recipes from '../recipes'

export default function FrontPage() {
  return (
    <div className="p-side-6">
      <h1>Reseptit</h1>
      <div className="item-pool grid">
        {recipes.map((item, i) => {
          return <ItemCards recipe={item} key={i} index={i} />
        })}
      </div>
    </div>
  )
}