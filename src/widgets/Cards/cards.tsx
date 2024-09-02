import { Card } from '@/shared/Card'
import { Box } from '@mui/material'
import { type FC, Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const Cards: FC = () => {
	const [cardCount, setCardCount] = useState<number>(2) 
	const targetRef = useRef<HTMLDivElement | null>(null)

	const addCards = useCallback(() => {
		setCardCount((prev) => prev + 6)
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && cardCount > 1) {
					addCards() 
				}
			},
			{ threshold: 1.0 },
		)

		if (targetRef.current) {
			observer.observe(targetRef.current)
		}

		return () => {
			if (targetRef.current) {
				observer.unobserve(targetRef.current)
			}
		}
	}, [addCards, cardCount])

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
			{Array.from({ length: cardCount }, (_, index) => (
				<Fragment key={uuidv4()}>
					<Card numberVacancy={index + 1} />
				</Fragment>
			))}
			<div ref={targetRef} /> 
		</Box>
	)
}
