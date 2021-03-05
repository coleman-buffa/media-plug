import React from 'react';
import { Card, Container, Button, FormControl, FormLabel, Input, InputLabel, TextField } from '@material-ui/core';
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
})

function Login() {
	const classes = useStyles();
	return (
		<Container className={classes.pagecont} md>
			<Card className={classes.cardcont}>
				<div>
					<FormControl className={classes.formcont}>
						<TextField required id="outlined-required" label="Required" defaultValue="Username" variant="outlined" className={classes.inputcont} />
						<TextField required id="outlined-required" label="Required" defaultValue="Email" variant="outlined" className={classes.inputcont} />
						<TextField id="outlined-search" label="Password" type="password" variant="outlined" className={classes.inputcont} />
						<Button variant="contained" color="primary">Signup</Button>
					</FormControl>
				</div>
				<div>
					<FormControl className={classes.formcont}>
						<TextField required id="outlined-required" label="Required" defaultValue="Username" variant="outlined" className={classes.inputcont} />
						<TextField required id="outlined-required" label="Required" defaultValue="Email" variant="outlined" className={classes.inputcont} />
						<TextField id="outlined-search" label="Password" type="password" variant="outlined" className={classes.inputcont} />
						<Button variant="contained" color="primary">Login</Button>
					</FormControl>
				</div>
			</Card>
		</Container>
	);
}

export default Login;