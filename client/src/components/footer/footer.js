import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
	root: {
		width: "100%",
		position: 'fixed',
		bottom: 0,
	},
	icon: {
		color: 'black',
		"&:hover": {
			color: 'darkgreen',
		},
	},
});

function Footer() {
	const classes = useStyles();

	return (
		<div className="footer">
			<BottomNavigation
				showLabels
				className={classes.root}
			>
				<BottomNavigationAction href="https://github.com/jessnyj" label="Jessny Joseph" icon={<GitHubIcon className={classes.icon} />} />
				<BottomNavigationAction href="https://github.com/coleman-buffa" label="Coleman Buffa" icon={<GitHubIcon className={classes.icon} />} />
				<BottomNavigationAction href="https://github.com/akhalid88" label="Muhammad Khalid" icon={<GitHubIcon className={classes.icon} />} />
			</BottomNavigation>
		</div>
	);
}

export default Footer;


