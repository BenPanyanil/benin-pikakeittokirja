import React, { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { useColorThemeContext } from '../Context'

export default function SearchItem({ index, setSearch, title, titles, setTitles, newSearch }) {
    let [status, setStatus] = useState(newSearch)
    const { colorTheme } = useColorThemeContext()



    const buttonHandler = () => {
        if (newSearch) {
            titles.splice(index, 1)
            setTitles(
                titles = [...titles]
            )
            setSearch('')
        } else {
            setStatus(status = !status)
            if (status) {
                setSearch(title)
            } else {
                setSearch('')
            }
        }
    }

    return (
        <button className="searchitem flex align-center" style={status ? { background: colorTheme.secondary, color: '#fff' } : null} onClick={() => buttonHandler()}>
            <p>{title}</p>
            {status ? <IoMdCloseCircle /> : null}
        </button>
    )
}
