import { ButtonSearch } from '@/shared/ButtonSearch'
import { Avatar, Box, Chip, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material'
import type React from 'react'
import { useState } from 'react'


export const WidgetSelect: React.FC = () => {
	const [selectedChips, setSelectedChips] = useState<string[]>([])
	const [open, setOpen] = useState(false)
	const chips = ['React', 'Angular', 'Vue', 'Js']

	/**
	 *
	 *
	 * @param {SelectChangeEvent<string[]>} event
	 */
	const handleChange = (event: SelectChangeEvent<string[]>): void => {
		const value = event.target.value as string[]
		setSelectedChips(value)
	}

	/**
	 *
	 *
	 * @param {string} chipToDelete
	 * @param {React.MouseEvent} event
	 */
	const handleDelete = (chipToDelete: string, event: React.MouseEvent): void => {
		event.stopPropagation()
		setSelectedChips((prev) => prev.filter((chip) => chip !== chipToDelete))
	}

	return (
		<Box
			sx={{
				width: '400px',
				bgcolor: 'rgb(240, 240, 240)',
				height: '70px',
				display: 'flex',
				alignItems: 'center',
				padding: '10px',
				gap: '10px',
			}}>
			<FormControl sx={{ width: '250px' }}>
				<InputLabel id='chip-select-label'>Навыки</InputLabel>
				<Select
					color='primary'
					sx={{ height: '50px' }}
					labelId='chip-select-label'
					multiple
					label='Навыки'
					value={selectedChips}
					onChange={handleChange}
					open={open}
					onOpen={() => setOpen(true)}
					onClose={() => setOpen(false)}
					renderValue={(selected) => (
						<div
							style={{
								gap: '4px',
								display: 'flex',
								flexWrap: 'nowrap',
								overflow: 'auto',
								whiteSpace: 'nowrap',
								scrollbarWidth: 'none',
							}}>
							{selected.map((value) => (
								<Chip
									avatar={<Avatar>ОР</Avatar>}
									key={value}
									label={value}
									onDelete={(event) => handleDelete(value, event)}
									onMouseDown={(e) => e.stopPropagation()}
								/>
							))}
						</div>
					)}>
					{chips.map((chip) => (
						<MenuItem key={chip} value={chip}>
							{chip}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<ButtonSearch />
		</Box>
	)
}
