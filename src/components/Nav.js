import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export default function Nav() {
    let history = useHistory()
    let location = useLocation()

    const showBackButton = () => {

        return (location.pathname === '/' ? null : <button onClick={() => handleClick()} className="back-btn">Back</button>)
    }

    const handleClick = () => {
        history.goBack()
    }

    return (
        <nav className="flex space-between"> 
            <div>{showBackButton()}</div>
            <div>menu</div>
        </nav>
    )
}
