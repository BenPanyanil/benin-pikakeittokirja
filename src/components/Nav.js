import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

export default function Nav() {
    let history = useHistory()
    let location = useLocation()

    const showBackButton = () => {

        return (location.pathname === '/' ? null : <button onClick={() => handleClick()} className="back-btn flex"><MdArrowBack /></button>)
    }

    const handleClick = () => {
        history.goBack()
    }

    return (
        <nav className="flex space-between">
            <div style={{ height: '30px' }}>{showBackButton()}</div>
        </nav>
    )
}
