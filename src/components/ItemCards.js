import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecipeContext } from '../RecipeContext'
import { MdSchedule } from "react-icons/md";


export default function ItemCards({ recipe, index }) {
    let history = useHistory()
    const { handleRecipe } = useRecipeContext()

    const handleItem = (index) => {
        history.push("/detail")
        handleRecipe(index)
    }

    return (
        <div onClick={() => handleItem(index)} className="item-card card">
            <div className="info-blob flex align-center space-between">
                <h4>{recipe.dishname}</h4>
                <p>{recipe.time}min <MdSchedule /></p>
            </div>
        </div>
    )
}
