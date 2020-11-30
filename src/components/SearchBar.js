import React, { useState } from 'react'
import SearchItem from './SearchItem'
import { IoMdSearch } from 'react-icons/io'

const currentTitles = [
    "Keitto",
    "Possu",
    "15min",
    "20min",
    "Kana",
    "Riisi",
    "Tom yam Kung",
]

export default function SearchBar({ setSearch }) {
    let [titles, setTitles] = useState(currentTitles)

    const keyHandler = (e) => {
        if (e.target.value === "") {
            return;
        }

        if (titles.length >= 12) {
            return;
        }

        let newTitle = e.target.value
        let lowerCased = newTitle.toLowerCase();
        let capitalized = lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1)
        newTitle = capitalized

        if (e.key === 'Enter') {
            setTitles(
                titles = [...titles, newTitle]
            )
            setSearch(newTitle)
            e.target.value = ""
        }
    }

    return (
        <div className="p-side-6 mt-3">
            <div className="searchinput flex align-center mb-1">
                <IoMdSearch />
                <input placeholder="Hae reseptiä" onKeyDown={(e) => { keyHandler(e) }}></input>
            </div>
            <div className="searchitempool flex flex-reverse flex-end flex-wrap">
                {titles.map((title, i) => (
                    <SearchItem
                        key={i}
                        index={i}
                        setSearch={setSearch}
                        title={title}
                        titles={titles}
                        setTitles={setTitles}
                        newSearch={i >= currentTitles.length ? true : false}
                    />
                ))}
            </div>
        </div >
    )
}
