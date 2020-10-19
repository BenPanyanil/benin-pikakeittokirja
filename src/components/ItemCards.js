import React from 'react'

export default function ItemCards({dishname, time}) {
    return (
        <div className="item-card card">
            <div className="info-blob align-center space-between">
                <h4>{dishname}</h4>
                <span>{`${time}min`}</span>
            </div>
        </div>
    )
}
