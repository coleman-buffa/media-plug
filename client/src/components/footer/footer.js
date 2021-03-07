import React from 'react';
import './footer.css';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, Typography } from '@material-ui/core';

const useStyles = makeStyles({
	foot: {
		position: 'relative',
		width: "100%",
		backgroundColor: 'transparent',
		color: 'black',
		bottom: 0,
		marginTop: 100
	},
	text: {
		alignContent: 'bottom',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	}
})

function Footer() {
	const classes = useStyles();
	return (
		<BottomNavigation className={classes.foot}>
			<Typography className={classes.text}>Media Plug designed by Coleman Buffa, Jessny Joseph, and Muhammad A Khalid</Typography>
		</BottomNavigation>
	);
}

export default Footer;