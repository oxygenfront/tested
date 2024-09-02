import { Box, Button } from '@mui/material'
import type { FC } from 'react'

export const Aside: FC = () => {
	return (
		<Box
			sx={{
				width: '500px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '50px',
			}}>
			<Button variant='contained' sx={{ width: '150px' }}>
				Вакансии
			</Button>
			<Button variant='contained' sx={{ width: '150px' }}>
				Курсы
			</Button>
		</Box>
	)
}
