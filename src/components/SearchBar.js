import React, { useState } from 'react'
import SearchItem from './SearchItem'
import { IoMdSearch } from 'react-icons/io'

const currentTitles = [
    "Tom yam Kung",
    "Kana",
    "Possu",
    "15min",
    "20min",
    "Keitto",
    "Riisi",
]

export default function SearchBar({ searchWord, setSearchWord }) {
    let [titles, setTitles] = useState(currentTitles)

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
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

            setTitles(
                titles = [...titles, newTitle]
            )

            setSearchWord(
                [...searchWord, newTitle]
            )

            e.target.value = ""
        }
    }

    return (
        <div className="p-side-6 mt-3">
            <div className="searchinput flex align-center mb-1">
                <IoMdSearch />
                <input placeholder="Hae reseptiä" onKeyPress={(e) => { keyHandler(e) }}></input>
            </div>
            <div className="searchitempool flex flex-reverse flex-end flex-wrap">
                {titles.map((title, i) => (
                    <SearchItem
                        key={i}
                        index={i}
                        searchWord={searchWord}
                        setSearchWord={setSearchWord}
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
