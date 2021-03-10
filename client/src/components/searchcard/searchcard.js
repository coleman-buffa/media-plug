import React from 'react';
import { makeStyles, Box, Card, CardActions, CardContent, Button, Typography, CardMedia } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Rating } from '@material-ui/lab';
import "./searchcard.css";

const useStyles = makeStyles({
	searchCard: {
		backgroundColor: '#F5F5F5',
		minWidth: 275,
		marginTop: 10,
		"&:hover": {
			transform: "scale(1.01)",
			boxShadow: "0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)",
			transition: ".1s",
		},
	},
	title: {
		marginTop: 20,
		fontSize: 25,
		marginLeft: 20,
		fontFamily: "Georgia",
		fontWeight: "bold",
	},
	author: {
		marginBottom: 12,
		marginLeft: 20,
		fontSize: 19,
		fontFamily: "Arial",
		fontWeight: "bold",
	},
	media: {
		marginTop: 28,
		height: 220,
		minWidth: 180,
	},
	content: {
		display: "flex",
	},
	desc: {
		marginLeft: 20,
	},
	saveBook: {
		float: "right",
	},
	rating: {
		marginLeft: 15,
	},
});

function SearchCard(props) {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.searchCard} elevation={0}>
				<CardContent className={classes.content}>
					<div>
						<CardMedia
							className={classes.media}
							image={props.book_image_link}
							title="Book Cover"
						/>
						<Box component="fieldset" borderColor="transparent">
							<Rating className={classes.rating} name="read-only" value={props.book_rating} readOnly />
						</Box>
					</div>
					<div>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							{props.book_name}
						</Typography>
						<Typography className={classes.author} color="textSecondary" >
							{props.book_author}
						</Typography>
						<Typography className={classes.desc} color="textSecondary" >
							{props.book_desc}
						</Typography>
					</div>
				</CardContent>
				<CardActions className={classes.saveBook}>
					<Button
						variant="contained"
						color="primary"
						size="small"
						className={classes.button}
						startIcon={<SaveIcon />}
						onClick={() => props.handleSaveButton(props.id)}
					>
						Save
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

export default SearchCard;
