import React from 'react'

import recipes from '../recipes'


export default function RecipePage() {

	let [currentRecipe] = recipes.filter( item => item.id === 1 )
	
	const ingredients = currentRecipe.ingredients
	const instructions = currentRecipe.instructions

  return (
    <div>
      <h1>{currentRecipe.dishname}</h1>
      <span>Annos koko: {currentRecipe.serving_size}</span>
      <span>Valmistus aika: {currentRecipe.time}</span>
      <br />
			<br />
      <div className="recipe grid">
        <table>
					<tbody>
						{ingredients.map( (item, i) => {
							return (
								<tr key={i}>
									<td>{item.name}</td>
									<td>{item.amount}<span> {item.unit}</span></td>
								</tr>
							)
						})}
					</tbody>
        </table>
				<ol>
					{instructions.map( (item, i) => {
						return (
							<li>
								<p>{item}</p>
							</li>
						)
					})}
				</ol>
      </div>
    </div>
  )
}

