import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	pagecont: {
		alignContent: "center"
	},
	section: {
		display: "flex",
		justifyContent: 'center'
	},
	card: {
		margin: 20
	},
	media: {
		height: 250
	}
});

function Explore() {
	const classes = useStyles();
	return (
		<Container className={classes.pagecont}>
			<Grid container>
				{/* Book List section */}
				<Typography variant="h2">Book list</Typography>
				<Grid item className={classes.section}>
					<Card className={classes.card}>
						<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book1" />
						<CardContent>
							<Typography variant="h4">Book Name #1</Typography>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary">Add to List</Button>
						</CardActions>
					</Card>

					<Card className={classes.card}>
						<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book2" />
						<CardContent>
							<Typography variant="h4">Book Name #2</Typography>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary">Add to List</Button>
						</CardActions>
					</Card>

					<Card className={classes.card}>
						<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book3" />
						<CardContent>
							<Typography variant="h4">Book Name #3</Typography>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary">Add to List</Button>
						</CardActions>
					</Card>

					<Card className={classes.card}>
						<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book4" />
						<CardContent>
							<Typography variant="h4">Book Name #4</Typography>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary">Add to List</Button>
						</CardActions>
					</Card>
				</Grid>

				{/* Challenge List section */}
				<Typography variant="h2">Challenge list</Typography>
				<Grid item className={classes.section}>
					<Card className={classes.card}>
						<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book1" />
						<CardContent>
							<Typography variant="h4">Challenge #1</Typography>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary">Add to List</Button>
						</CardActions>
					</Card>

					<Card className={classes.card}>
						<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book2" />
						<CardContent>
							<Typography variant="h4">Challenge #2</Typography>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary">Add to List</Button>
						</CardActions>
					</Card>

					<Card className={classes.card}>
						<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book3" />
						<CardContent>
							<Typography variant="h4">Challenge #3</Typography>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary">Add to List</Button>
						</CardActions>
					</Card>

					<Card className={classes.card}>
						<CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book4" />
						<CardContent>
							<Typography variant="h4">Challenge #4</Typography>
						</CardContent>
						<CardActions>
							<Button variant="contained" color="secondary">Add to List</Button>
						</CardActions>
					</Card>
				</Grid>
				
			</Grid>
		</Container>
	);
}

export default Explore;