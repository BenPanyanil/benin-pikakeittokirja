import React from 'react'

export default function ItemCards({recipe}) {

    const handleItem = () => {
        alert('kakka')
    }

    return (
        <div onClick={() => handleItem()} className="item-card card">
            <div className="info-blob align-center space-between">
                <h4>{recipe.dishname}</h4>
                <span>{`${recipe.time}min`}</span>
            </div>
        </div>
    )
}
