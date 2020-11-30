import React from 'react'
import { useColorThemeContext } from '../Context'

export default function EmptyPage() {
    const { colorTheme } = useColorThemeContext();

    return (
        <div className="p-side-6">
            <h1 style={{ color: colorTheme.primary }}>404 sorry, no recipes found</h1>
        </div>
    )
}
