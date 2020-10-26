import React from 'react'

import RecipePage from '../components/RecipePage'
import EmptyPage from '../pages/EmptyPage'

export default function Recipe() {
	return (
		<>
			{localStorage.length === 0 ? <EmptyPage /> : <RecipePage />}
		</>
	)
}
