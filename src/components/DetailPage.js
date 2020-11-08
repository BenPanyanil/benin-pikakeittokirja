import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecipeContext } from '../Context'
import { useTriggerTransition } from '../Context'
import { useColorThemeContext } from '../Context'
import { MdPerson, MdSchedule } from "react-icons/md";

export default function Detail() {
	const { recipes, handleServingSize } = useRecipeContext()
	const { setTransition } = useTriggerTransition()
	const { colorTheme } = useColorThemeContext();

	const recipe = recipes[localStorage.getItem('recipeState')]

	let history = useHistory()
	let [customPicker, setCustomPicker] = useState(false)
	let [customValue, setCustomValue] = useState(5)
	let x = window.matchMedia("(max-width: 600px)")

	const refSlideIn = useRef()
	const refSlideOut = useRef()

	const handleButton = (int, x) => {
		handleServingSize(int)
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		if (x.matches) {
			history.push("/recipe")
		} else {
			setTimeout(() => {
				history.push("/recipe")
			}, 500)
			setTimeout(() => {
				setTransition(false)
			}, 1000)
			setTransition(true)
		}
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
			refSlideIn.current.style.visibility = 'visible'
			refSlideOut.current.style.visibility = 'hidden'
			refSlideOut.current.style.opacity = '0'
			refSlideOut.current.style.left = '-25%'
		}
	}, [customPicker])


	return (
		<>
			<div className="p-side-6 mt-5">
				<h1 style={{ color: colorTheme.secondary }}>{recipe.dishname}</h1>
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
						<h4 className="text-center mb-2" style={{ color: colorTheme.primary }}>Valitse annoskoko:</h4>
						<div className="small-grid justify-center">
							<button style={{ background: colorTheme.primary }} onClick={() => handleButton(1, x)} className="servingSize-btn">1<MdPerson /></button>
							<button style={{ background: colorTheme.primary }} onClick={() => handleButton(2, x)} className="servingSize-btn">2<MdPerson /></button>
							<button style={{ background: colorTheme.primary }} onClick={() => handleButton(3, x)} className="servingSize-btn">3<MdPerson /></button>
							<button style={{ background: colorTheme.primary }} onClick={() => handleButton(4, x)} className="servingSize-btn">4<MdPerson /></button>
							<div className="special-grid">
								<div ref={refSlideOut} className="small-grid justify-center slideOut">
									<button style={{ background: colorTheme.primary }} onClick={() => handleButton(5, x)} className="servingSize-btn">5<MdPerson /></button>
									<button style={{ background: colorTheme.primary }} onClick={() => setCustomPicker(true)} className="servingSize-btn">X</button>
								</div>
								<div ref={refSlideIn} className="servingSize-custom flex align-center space-between p-side-4">
									<button style={{ background: colorTheme.secondary }} onClick={() => minus()} className="operator-btn">-</button>
									<button style={{ background: colorTheme.primary }} onClick={() => handleButton(customValue, x)} className="servingSize-btn">{customValue}<MdPerson /></button>
									<button style={{ background: colorTheme.secondary }} onClick={() => plus()} className="operator-btn">+</button>
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
