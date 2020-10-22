import React from 'react'

import recipes from '../recipes'


export default function RecipePage() {

	let [currentRecipe] = recipes.filter( item => item.id === 1 )
	
	const ingredients = currentRecipe.ingredients
	const instructions = currentRecipe.instructions

  return (
		<>
			<div className="p-side-6">
				<div className></div>
				<h1>{currentRecipe.dishname}</h1>
				<span>Annos koko: {currentRecipe.serving_size}</span>
				<span>Valmistus aika: {currentRecipe.time}</span>
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
			<div className="img-slider mt-5">
				<div className="img"></div>
			</div>
		</>
  )
}

