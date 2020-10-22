import React from 'react'
import { useHistory } from 'react-router-dom'

export default function DetailPage() {
let history = useHistory()
	
const handleButton = () => {
	history.push("/recipe")
}

	return (
		<>
			<div className="p-side-6">
					<h1>Noodle</h1>
					<div className="grid">
						<div>
							<p className="mb-3">Description description mooooore description and some description</p>
							<p>10min</p>
							<hr />
							<ul>
								<li>Nuudeli</li>
								<li>Vesi</li>
							</ul>
						</div>
						<div className="servingSize-calculator grid justify-center">
							<button onClick={() => handleButton()} className="servingSize-btn">1</button>
							<button onClick={() => handleButton()} className="servingSize-btn">2</button>
							<button onClick={() => handleButton()} className="servingSize-btn">3</button>
							<button onClick={() => handleButton()} className="servingSize-btn">4</button>
							<button onClick={() => handleButton()} className="servingSize-btn">5</button>
						</div>
					</div>
			</div>
			<div className="img-slider mt-5">
				<div className="img"></div>
			</div>
		</>
	)
}
