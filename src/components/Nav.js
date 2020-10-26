import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

export default function Nav() {
    let history = useHistory()
    let location = useLocation()
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        if (location.pathname !== '/') {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }, [location.pathname])

    const handleClick = () => {
        history.goBack()
    }

    return (
        <nav className="flex space-between">
            <div style={{ height: '30px' }}><button onClick={() => handleClick()} className={`back-btn flex ${visibility && "back-btn-visible"}`}><MdArrowBack /></button></div>
        </nav>
    )
}
