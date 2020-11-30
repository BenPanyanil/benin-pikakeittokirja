import React from 'react'

import RecipeRender from '../components/RecipeRender'
import EmptyPage from './EmptyPage'

export default function Recipe() {
	return (
		<>
			{localStorage.length === 0 ? <EmptyPage /> : <RecipeRender />}
		</>
	)
}
