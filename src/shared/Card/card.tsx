import { Box, Button, Container, Typography } from '@mui/material'
import type { FC } from 'react'

interface ICardProps {
	numberVacancy: number
}

export const Card: FC<ICardProps> = ({ numberVacancy }) => {
	return (
		<Container
			maxWidth='lg'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '13px',
				bgcolor: 'white',
				padding: '20px 25px',
				white: '100%',
				height: 'fit-content',
				maxWidth: '1500px',
				borderRadius: '10px',
			}}>
			<Box>
				<Typography variant='h5'>Вакансия №{numberVacancy}</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
					<Typography sx={{ fontSize: '16px', fontWeight: '500' }}>130000-220000 руб. на руки</Typography>
					<Typography
						sx={{
							bgcolor: 'rgb(0, 179, 255)',
							width: 'fit-content',
							padding: '5px',
							color: 'black',
							fontWeight: '400',
							borderRadius: '5px',
							fontSize: '15px',
						}}>
						Опыт 3-6 лет
					</Typography>
				</Box>
			</Box>
			<Box>
				<Typography>Камиры</Typography>
				<Typography>ООО ОПТИМУС</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '15px' }}>
				<Button variant='contained'>Откликнуться</Button>
				<Button variant='outlined'>Откликнуться</Button>
			</Box>
		</Container>
	)
}
