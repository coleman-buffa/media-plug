import React from 'react';
import { Card, Container, Button, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
	return (
		<Container className={classes.pagecont} md="true">
			<Card className={classes.cardcont}>
				<form>
					<FormControl className={classes.formcont}>
						<TextField required id="reg-user" label="Required" defaultValue="Username" variant="outlined" className={classes.inputcont} />
						<TextField required id="reg-email" label="Required" defaultValue="Email" variant="outlined" className={classes.inputcont} />
						<TextField id="reg-pass" label="Password" autoComplete="current-password" type="password" variant="outlined" className={classes.inputcont} />
						<Button variant="contained" color="primary">Signup</Button>
					</FormControl>
				</form>
				<form>
					<FormControl className={classes.formcont}>
						<TextField required id="login-user" label="Required" defaultValue="Username" variant="outlined" className={classes.inputcont} />
						<TextField required id="login-email" label="Required" defaultValue="Email" variant="outlined" className={classes.inputcont} />
						<TextField id="login-pass" label="Password" autoComplete="current-password" type="password" variant="outlined" className={classes.inputcont} />
						<Button variant="contained" color="primary">Login</Button>
					</FormControl>
				</form>
			</Card>
		</Container>
	);
}

export default Login;