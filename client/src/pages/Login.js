import React, { useEffect } from 'react';
import { Container, Button, FormControl, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import API from "../utils/API";

const useStyles = makeStyles({
	cardcont: {
		marginTop: "10%",
		padding: 10,
	},
	formcont: {
		alignContent: "center",
		margin: '0 50px',
	},
	inputcont: {
		margin: 5
	},
	login: {
		backgroundColor: 'black',
		color: 'white',
		'&:hover': {
			backgroundColor: 'green',
		}
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
	}
});

function Login() {

	const classes = useStyles();
	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

	useEffect(() => {
		if (isAuthenticated) {
			//API call that checks uf user email exists in DB
			API.checkUser(user.email)
				.then(result => {
					if (result.data.length === 0) {
						API.createUser(user)
							.then(result => {
								console.log("User successfully added to DB");
							})
							.catch(err => console.log(err));
					}
				})
				.catch(err => console.log(err));
		}
	}, [user, isAuthenticated]);

	return (
		<Grid container className={classes.container}>
			<Grid item xs={12}>
				<div>
					<h1 className="animate__animated animate__fadeInDown appTitle">Welcome to MEDIAPLUG</h1>
					<p id="getStarted">Click 'Get Started' if you would like to sign in or if you are a first time user.</p>
				</div>
			</Grid>
			<Grid item className={classes.button}>
				<form>
					<FormControl className={classes.formcont}>
						{isAuthenticated ?
							(<Button className={classes.login} variant="contained" color="primary" onClick={() => logout()}>Logout</Button>) : (<Button variant="contained" className={classes.login} onClick={() => loginWithRedirect()}>Get Started</Button>)}
					</FormControl>
				</form>
			</Grid>
		</Grid>
	);
}

export default Login;