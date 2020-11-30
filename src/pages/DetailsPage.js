import React from 'react'

import DetailRender from '../components/DetailRender'
import EmptyPage from './EmptyPage'

export default function Detail() {
	return (
		<>
			{localStorage.length === 0 ? <EmptyPage /> : <DetailRender />}
		</>
	)
}
