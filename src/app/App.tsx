import { Aside } from '@/widgets/Aside'
import { Header } from '@/widgets/Header'
import { Main } from '@/widgets/Main'
import { Box } from '@mui/material'

export function App() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}>
			<Header />
			<Box
				maxWidth='xl'
				sx={{
					maxWidth: '100%',
					display: 'flex',
					height: '100%',
					justifyContent: 'space-between',
				}}>
				<Aside />
				<Main />
			</Box>
		</Box>
	)
}
