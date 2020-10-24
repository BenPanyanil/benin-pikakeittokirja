import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSetRecipe } from '../RecipeContext'


export default function ItemCards({ recipe, index }) {
    let history = useHistory()
    const setRecipe = useSetRecipe()

    const handleItem = (index) => {
        history.push("/detail")
        setRecipe(index)
    }

    return (
        <div onClick={() => handleItem(index)} className="item-card card">
            <div className="info-blob flex align-center space-between">
                <h4>{recipe.dishname}</h4>
                <span>{`${recipe.time}min`}</span>
            </div>
        </div>
    )
}
