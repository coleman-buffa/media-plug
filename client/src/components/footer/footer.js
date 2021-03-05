import React from 'react';
import './footer.css';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, Typography } from '@material-ui/core';

const useStyles = makeStyles({
	foot: {
		position: 'fixed',
		width: "100%",
		backgroundColor: '#3F51B5',
		color: '#C2C8E7',
		bottom: 0
	},
	text: {
		alignContent: 'bottom',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}
})

function Footer() {
	const classes = useStyles();
	return (
		<BottomNavigation className={classes.foot} showlabels="false">
			<Typography className={classes.text}>Media Plug designed by Coleman Buffa, Jessny Joseph, and Muhammad A Khalid</Typography>
		</BottomNavigation>
	);
}

export default Footer;