import React from 'react'
import SearchItem from './SearchItem'
import { IoMdSearch } from 'react-icons/io'

export default function SearchBar() {
    return (
        <div className="p-side-6 mt-3">
            <div className="searchinput flex align-center">
                <IoMdSearch />
                <input placeholder="Hae reseptiä"></input>
            </div>
            <div className="searchitempool flex my-1">
                <SearchItem title={"Tom yam Kung"} />
                <SearchItem title={"Kana"} />
                <SearchItem title={"20min"} />
            </div>
        </div >
    )
}
