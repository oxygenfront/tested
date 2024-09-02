import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import type { FC } from 'react';

export const Header: FC = () => {
	return (
		<AppBar
			position='static'
			sx={{
				height: '150px',
				bgcolor: 'rgb(240, 240, 240)',
				display: 'flex',
				justifyContent: 'center',
				boxShadow: 'none',
			}}
		>
			<Toolbar
				variant='dense'
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Typography variant='h4' color='black' component='div'>
					Центр занятости населения
				</Typography>
				<IconButton>
					<Box
						sx={{
							bgcolor: 'rgb(148, 146, 146)',
							borderRadius: '50%',
							width: '40px',
							height: '40px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<PersonIcon
							sx={{ width: '25px', height: '25px', p: '0', color: 'white' }}
						/>
					</Box>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};
