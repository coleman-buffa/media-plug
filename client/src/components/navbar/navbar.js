import React from 'react';
import clsx from 'clsx';
import { makeStyles, SwipeableDrawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import PublicIcon from '@material-ui/icons/Public';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	navText: {
		color: 'black',
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
	const { logout } = useAuth0();

	const toggleDrawer = (anchor, open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div id="drawer"
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, true)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<div>
				<List>
					<ListItemLink className={classes.navText} button key={'Profile'} href="/profile">
						<ListItemIcon>
							<AccountCircleIcon />
						</ListItemIcon>
						<ListItemText primary={'Profile'} />
					</ListItemLink>

					<ListItemLink className={classes.navText} button key={'Explore'} href="/explore">
						<ListItemIcon>
							<PublicIcon />
						</ListItemIcon>
						<ListItemText primary={'Explore'} />
					</ListItemLink>


					<ListItemLink className={classes.navText} button key={'Search Books'} href="/search" >
						<ListItemIcon>
							<SearchIcon />
						</ListItemIcon>
						<ListItemText primary={'Search Books'} />
					</ListItemLink>

					<ListItemLink className={classes.navText} button key={'Challenges'} href="/challenges">
						<ListItemIcon>
							<FlashOnIcon />
						</ListItemIcon>

						<ListItemText primary={'Challenges'} />
					</ListItemLink>
				</List>
				<Divider />
				<List>
					<ListItemLink onClick={() => logout()}>
						<ListItem button key="Signout" >
							<ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
							<ListItemText primary="Signout" />
						</ListItem>
					</ListItemLink>

					{/* {['Signout'].map((text) => (
						<ListItemLink onClick={() => logout()}>
							<ListItem button key={text} >
								<ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						</ListItemLink>
					))} */}
				</List>
			</div>
		</div>
	);
	return (
		<div className="nav">
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