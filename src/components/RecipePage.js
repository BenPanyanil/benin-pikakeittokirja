import React from 'react'
import { useRecipeContext } from '../RecipeContext'
import { MdPerson } from "react-icons/md";

export default function RecipePage() {

    const { recipes } = useRecipeContext()

    const recipe = recipes[localStorage.getItem('recipeState')]
    const servingSize = localStorage.getItem('servingSize')

    return (
        <>
            <div className="p-side-6 mt-4">
                <h1>{recipe.dishname}</h1>
                <div>
                    <span>Valittu annos koko:</span>
                    <span style={{ fontWeight: 600 }}>{servingSize} <MdPerson /></span>
                </div>
                <div className="recipe grid">
                    <table>
                        <tbody>
                            {recipe.ingredients.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.name}</td>
                                        <td>{Math.ceil((item.amount / recipe.serving_size) * servingSize)}<span> {item.unit}</span></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <ol>
                        {recipe.instructions.map((item, i) => {
                            return (
                                <li key={i}>
                                    <p>{item}</p>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
            <div className="img-slider mt-6">
                <img src={recipe.image} alt="dish-img"></img>
            </div>
        </>
    )
}

