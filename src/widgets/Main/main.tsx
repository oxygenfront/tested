import { Cards } from '@/widgets/Cards'
import { WidgetSearch } from '@/features/WidgetSearch'
import { WidgetSelect } from '@/features/WidgetSelect'
import { AppBar, Box, Button } from '@mui/material'
import { type FC, useCallback, useState } from 'react'

export const Main: FC = () => {
	const [changeDesign, setChangeDesign] = useState(false)

	const design = useCallback(
		() =>
			changeDesign ? (
				<AppBar
					position='sticky'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '20px',
						mb: '30px',
						width: '100%',
						flexDirection: 'row',
					}}>
					<WidgetSelect />
					<WidgetSearch />
				</AppBar>
			) : (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '20px',
						mb: '30px',
						width: '100%',
						flexDirection: 'row',
					}}>
					<WidgetSelect />
					<WidgetSearch />
				</Box>
			),
		[changeDesign],
	)

	return (
		<Box
			sx={{
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				maxHeight: 'calc(100vh - 150px)',
				bgcolor: 'rgb(200, 200, 200)',
				borderRadius: '15px',
				overflowY: 'auto',
				pb: '30px',
			}}>
			<Box
				sx={{
					bgcolor: 'rgb(160, 160, 160)',
					height: '70px',
					p: '20px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					mb: '20px',
				}}>
				Вакансии
				<Button variant='contained' onClick={() => setChangeDesign(!changeDesign)}>
					Сменить дизайн
				</Button>
			</Box>
			{design()}
			<Cards />
		</Box>
	)
}
