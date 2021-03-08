import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
	root: {
		width: "100%",
		marginTop: 550,
	},
});

function Footer() {
	const classes = useStyles();

	return (
		<BottomNavigation
			showLabels
			className={classes.root}
		>
			<BottomNavigationAction href="https://github.com/jessnyj" label="Jessny Joseph" icon={<GitHubIcon color="primary" />} />
			<BottomNavigationAction href="https://github.com/coleman-buffa" label="Coleman Buffa" icon={<GitHubIcon color="primary" />} />
			<BottomNavigationAction href="https://github.com/akhalid88" label="Muhammad Khalid" icon={<GitHubIcon color="primary" />} />
		</BottomNavigation>
	);
}

export default Footer;


