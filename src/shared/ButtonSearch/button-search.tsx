import { Button } from '@mui/material';
import type { FC } from 'react';

export const ButtonSearch: FC = () => {
	return (
		<Button variant='contained' sx={{ flex: 1, height: '50px' }}>
			Найти
		</Button>
	);
};
