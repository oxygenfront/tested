import { ButtonSearch } from '@/shared/ButtonSearch';
import { Box, TextField } from '@mui/material';
import { type ChangeEvent, type FC, useState } from 'react';

export const WidgetSearch: FC = () => {
	const [value, setValue] = useState('');

	/**
	 *
	 *
	 * @param {ChangeEvent<HTMLInputElement>} event
	 */
	
	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<Box
			component='form'
			sx={{
				width: '400px',
				bgcolor: 'rgb(240, 240, 240)',
				height: '70px',
				display: 'flex',
				alignItems: 'center',
				padding: '10px',
				gap: '10px',
			}}
		>
			<TextField
				variant='filled'
				label='Город'
				onChange={handleInput}
				value={value}
				fullWidth
				sx={{ fontSize: '20px', height: '60px', width: '250px' }}
			/>
			<ButtonSearch />
		</Box>
	);
};
