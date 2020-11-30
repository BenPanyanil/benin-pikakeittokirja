import React from 'react'
import { MdClose } from 'react-icons/md'

export default function SearchItem({ title }) {
    return (
        <div className="searchitem flex align-center">
            <p>{title}</p>
            {false ? <MdClose /> : null}
        </div>
    )
}
