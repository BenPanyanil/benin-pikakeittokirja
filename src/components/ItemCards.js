import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecipeContext } from '../Context'
import { useTriggerTransition } from '../Context'
import { useColorThemeContext } from '../Context'
import { MdSchedule } from "react-icons/md";


export default function ItemCards({ recipe, index }) {
	let history = useHistory()
	const { handleRecipe } = useRecipeContext()
	const { setTransition } = useTriggerTransition()
	const { colorTheme } = useColorThemeContext();
	let x = window.matchMedia("(max-width: 1000px)")

	const handleItem = (index, x) => {
		handleRecipe(index)
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		if (x.matches) {
			history.push("/detail")
		} else {
			setTimeout(() => {
				history.push("/detail")
			}, 500)
			setTimeout(() => {
				setTransition(false)
			}, 1000)
			setTransition(true)
		}
	}

	return (
		<div onClick={() => handleItem(index, x)} className="card">
			<img src={recipe.image} alt="dish-img"></img>
			<div className="info-blob flex align-center space-between">
				<h4 style={{ color: colorTheme.primary }}>{recipe.dishname}</h4>
				<p>{recipe.time}min <MdSchedule /></p>
			</div>
		</div>
	)
}
