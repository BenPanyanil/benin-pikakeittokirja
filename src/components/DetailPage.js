import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecipeContext } from '../RecipeContext'
import { useTriggerTransition } from '../RecipeContext'
import { MdPerson, MdSchedule } from "react-icons/md";

export default function Detail() {
	const { recipes, handleServingSize } = useRecipeContext()
	const { setTransition } = useTriggerTransition()

	const recipe = recipes[localStorage.getItem('recipeState')]

	let history = useHistory()
	let [customPicker, setCustomPicker] = useState(false)
	let [customValue, setCustomValue] = useState(5)

	const refSlideIn = useRef()
	const refSlideOut = useRef()

	const handleButton = (int) => {
		handleServingSize(int)
		setTimeout(() => {
			history.push("/recipe")
		}, 500)
		setTimeout(() => {
			setTransition(false)
		}, 1000)
		setTransition(true)
	}



	const minus = () => {
		if (customValue > 1) {
			setCustomValue(customValue - 1)
		}
	}

	const plus = () => {
		if (customValue < 10) {
			setCustomValue(customValue + 1)
		}
	}

	useEffect(() => {
		if (customPicker) {
			refSlideIn.current.style.left = '0px'
			refSlideIn.current.style.opacity = '1'
			refSlideOut.current.style.opacity = '0'
			refSlideOut.current.style.left = '-25%'
		}
	}, [customPicker])


	return (
		<>
			<div className="p-side-6">
				<h1>{recipe.dishname}</h1>
				<div className="grid">
					<div>
						<p className="mb-3">{recipe.description}</p>
						<span>{recipe.serving_size} <MdPerson /></span>
						<span>{recipe.time} <MdSchedule /></span>
						<hr />
						<ul>
							{recipe.ingredients.map((item, i) => {
								return (<li key={i}>{item.name}</li>)
							})}
						</ul>
					</div>
					<div className="servingSize-calculator">
						<div className="grid justify-center">
							<button onClick={() => handleButton(1)} className="servingSize-btn">1<MdPerson /></button>
							<button onClick={() => handleButton(2)} className="servingSize-btn">2<MdPerson /></button>
							<button onClick={() => handleButton(3)} className="servingSize-btn">3<MdPerson /></button>
							<button onClick={() => handleButton(4)} className="servingSize-btn">4<MdPerson /></button>
							<div className="special-grid">
								<div ref={refSlideOut} className="grid justify-center slideOut">
									<button onClick={() => handleButton(5)} className="servingSize-btn">5<MdPerson /></button>
									<button onClick={() => setCustomPicker(true)} className="servingSize-btn">X</button>
								</div>
								<div ref={refSlideIn} className="servingSize-custom flex align-center space-between p-side-4">
									<button onClick={() => minus()} className="operator-btn">-</button>
									<button onClick={() => handleButton(customValue)} className="servingSize-btn">{customValue}<MdPerson /></button>
									<button onClick={() => plus()} className="operator-btn">+</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="img-slider mt-6">
				<img src={recipe.image} alt="dish-img"></img>
			</div>
		</>
	)
}
