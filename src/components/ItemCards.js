import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecipeContext } from '../RecipeContext'
import { useTriggerTransition } from '../RecipeContext'
import { MdSchedule } from "react-icons/md";


export default function ItemCards({ recipe, index }) {
	let history = useHistory()
	const { handleRecipe } = useRecipeContext()
	const { setTransition } = useTriggerTransition()

	const handleItem = (index) => {
		handleRecipe(index)
		setTimeout(() => {
			history.push("/detail")
		}, 500)
		setTimeout(() => {
			setTransition(false)
		}, 1000)
		setTransition(true)
	}

	return (
		<div onClick={() => handleItem(index)} className="card">
			<img src={recipe.image} alt="dish-img"></img>
			<div className="info-blob flex align-center space-between">
				<h4>{recipe.dishname}</h4>
				<p>{recipe.time}min <MdSchedule /></p>
			</div>
		</div>
	)
}
