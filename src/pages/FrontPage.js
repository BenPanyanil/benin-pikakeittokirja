import React from 'react'

import ItemCards from '../components/ItemCards'

export default function FrontPage() {
  return (
    <div>
      <h1>Hello from frontpage</h1>
        <div className="item-pool pool space-between">
          <ItemCards />
          <ItemCards />
          <ItemCards />
          <ItemCards />
          <ItemCards />
          <ItemCards />
        </div>
    </div>
  )
}
