import React from 'react'

export default function RecipePage() {

	const empty = []

	return (
		<>
			<div className="p-side-6">
				<div className></div>
				<h1></h1>
				<span>Annos koko: </span>
				<span>Valmistus aika: </span>
				<div className="recipe grid">
					<table>
						<tbody>
							{empty.map((item, i) => {
								return (
									<tr key={i}>
										<td></td>
										<td><span></span></td>
									</tr>
								)
							})}
						</tbody>
					</table>
					<ol>
						{empty.map((item, i) => {
							return (
								<li>
									<p></p>
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

