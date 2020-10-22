import React from 'react'
import { useHistory } from 'react-router-dom'


export default function ItemCards({recipe}) {
    let history = useHistory()

    const handleItem = () => {
        history.push("/detail")
        //Näytä oikea resepti
    }

    return (
        <div onClick={() => handleItem()} className="item-card card">
            <div className="info-blob flex align-center space-between">
                <h4>{recipe.dishname}</h4>
                <span>{`${recipe.time}min`}</span>
            </div>
        </div>
    )
}
