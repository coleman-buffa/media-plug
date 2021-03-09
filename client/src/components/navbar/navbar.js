import React from 'react';
import clsx from 'clsx';
import { makeStyles, SwipeableDrawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText,} from '@material-ui/core';
import {ExitToAppIcon, AccountCircleIcon, SearchIcon, PublicIcon, FlashOnIcon, MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});
function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

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
			onClick={toggleDrawer(anchor, true)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItemLink button key={'Profile'} href="/profile">
					<ListItemIcon>
						<AccountCircleIcon />
					</ListItemIcon>
					<ListItemText primary={'Profile'} />
				</ListItemLink>
				<ListItemLink button key={'Explore'} href="/explore">
					<ListItemIcon>
						<PublicIcon />
					</ListItemIcon>
					<ListItemText primary={'Explore'} />
				</ListItemLink>
				<ListItemLink button key={'Search Books'} href="/search" >
					<ListItemIcon>
						<SearchIcon />
					</ListItemIcon>
					<ListItemText primary={'Search Books'} />
				</ListItemLink>
				<ListItemLink button key={'Challenges'} href="/challenges">
					<ListItemIcon>
						<FlashOnIcon />
					</ListItemIcon>

					<ListItemText primary={'Challenges'} />
				</ListItemLink>
			</List>
			<Divider />
			<List>
				{['Signout'].map((text) => (
					<ListItemLink href="/login">
						<ListItem button key={text}>
							<ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					</ListItemLink>
				))}
			</List>
		</div>
	);
	return (
		<div>
			<React.Fragment key={"anchor"}>
				<Button onClick={toggleDrawer("anchor", true)}><ListItemIcon><MenuIcon /></ListItemIcon></Button>
				<SwipeableDrawer
					anchor={"left"}
					open={state["anchor"]}
					onClose={toggleDrawer("anchor", false)}
					onOpen={toggleDrawer("anchor", true)}
				>
					{list("anchor")}
				</SwipeableDrawer>
			</React.Fragment>
		</div>
	);
}

export default Navbar;