import React from 'react'

import DetailPage from '../components/DetailPage'
import EmptyPage from './EmptyPage'

export default function Detail() {
	return (
		<>
			{localStorage.length === 0 ? <EmptyPage /> : <DetailPage />}
		</>
	)
}
