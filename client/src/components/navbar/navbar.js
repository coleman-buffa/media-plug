import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import PublicIcon from '@material-ui/icons/Public';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

function Navbar() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false
	});
	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem button key={'Profile'}>
					<ListItemIcon><AccountCircleIcon /></ListItemIcon>
					<ListItemText primary={'Profile'} />
				</ListItem>
				<ListItem button key={'Explore'}>
					<ListItemIcon><PublicIcon /></ListItemIcon>
					<ListItemText primary={'Explore'} />
				</ListItem>
				<ListItem button key={'Search Books'}>
					<ListItemIcon><SearchIcon /></ListItemIcon>
					<ListItemText primary={'Search Books'} />
				</ListItem>
				<ListItem button key={'Challenges'}>
					<ListItemIcon><FlashOnIcon /></ListItemIcon>
					<ListItemText primary={'Challenges'} />
				</ListItem>
			</List>
			<Divider />
			<List>
				{['Signout'].map((text) => (
					<ListItem button key={text}>
						<ListItemIcon>{<ExitToAppIcon/>}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);
	return (
		<div>
			{['Menu'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
}

export default Navbar;