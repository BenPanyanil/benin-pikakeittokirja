import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecipe } from '../RecipeContext'

export default function DetailPage() {
	const recipe = useRecipe()

	let history = useHistory()
	let [customSize, setCustomSize] = useState(false)
	let [customValue, setCustomValue] = useState(5)

	const refSlideIn = useRef()
	const refSlideOut = useRef()

	const handleButton = () => {
		history.push("/recipe")
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
		if (customSize === true) {
			refSlideIn.current.style.left = '0px'
			refSlideIn.current.style.opacity = '1'
			refSlideOut.current.style.opacity = '0'
			refSlideOut.current.style.left = '-25%'
		}
	}, [customSize])


	return (
		<>
			<div className="p-side-6">
				<h1>{recipe.dishname}</h1>
				<div className="grid">
					<div>
						<p className="mb-3">{recipe.description}</p>
						<p>{recipe.time}min</p>
						<hr />
						<ul>
							{recipe.ingredients.map((item, i) => {
								return (<li key={i}>{item.name}</li>)
							})}
						</ul>
					</div>
					<div className="servingSize-calculator">
						<div className="grid justify-center">
							<button onClick={() => handleButton()} className="servingSize-btn">1</button>
							<button onClick={() => handleButton()} className="servingSize-btn">2</button>
							<button onClick={() => handleButton()} className="servingSize-btn">3</button>
							<button onClick={() => handleButton()} className="servingSize-btn">4</button>
							<div className="special-grid">
								<div ref={refSlideOut} className="grid justify-center slideOut">
									<button onClick={() => handleButton()} className="servingSize-btn">5</button>
									<button onClick={() => setCustomSize(true)} className="servingSize-btn">X</button>
								</div>
								<div ref={refSlideIn} className="servingSize-custom flex align-center space-between p-side-4">
									<button onClick={() => minus()} className="operator-btn">-</button>
									<button onClick={() => handleButton()} className="servingSize-btn">{customValue}</button>
									<button onClick={() => plus()} className="operator-btn">+</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="img-slider mt-5">
				<div className="img"></div>
			</div>
		</>
	)
}
