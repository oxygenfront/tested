import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import '@/shared/index.css'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
	palette: {
		primary: {
			main: '#0288d1',
		},
		info: {
			main: 'rgb(0, 179, 255)',
		},
	},
})
theme.palette.primary.main = theme.palette.info.main
createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>,
)
