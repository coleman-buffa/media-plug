import React from 'react';
import { Card, Container, Button, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import "./Login.css";

const useStyles = makeStyles({
	pagecont: {
		alignContent: "center"
	},
	cardcont: {
		marginTop: "10%",
		padding: 10,
		display: "flex",
		justifyContent: "center"
	},
	formcont: {
		alignContent: "center",
		margin: '0 50px',
	},
	inputcont: {
		margin: 5
	}
});

function Login() {
	const classes = useStyles();
	const { loginWithRedirect, logout } = useAuth0();

	return (
		<Container className={classes.pagecont} md="true">
			<Card className={classes.cardcont}>
				<form>
					<FormControl className={classes.formcont}>
						<TextField required id="reg-user" label="Required" placeholder="Username" variant="outlined" className={classes.inputcont} />
						<TextField required id="reg-email" label="Required" placeholder="Email" variant="outlined" className={classes.inputcont} />
						<TextField id="reg-pass" label="Password" autoComplete="current-password" type="password" variant="outlined" className={classes.inputcont} />
						<Button variant="contained" color="primary">Signup</Button>
					</FormControl>
				</form>
				<form>
					<FormControl className={classes.formcont}>
						<TextField required id="login-user" label="Required" placeholder="Username" variant="outlined" className={classes.inputcont} />
						<TextField required id="login-email" label="Required" placeholder="Email" variant="outlined" className={classes.inputcont} />
						<TextField id="login-pass" label="Password" autoComplete="current-password" type="password" variant="outlined" className={classes.inputcont} />
						{/* All we need below! */}
						<Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>Login</Button>
						<Button variant="contained" color="primary" onClick={() => logout()}>Logout</Button>
					</FormControl>
				</form>

			</Card>
		</Container>
	);
}

export default Login;