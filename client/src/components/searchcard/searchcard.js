import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SaveIcon from '@material-ui/icons/Save';
import "./searchcard.css";

const useStyles = makeStyles({
	searchCard: {
		backgroundColor: '#eeeeee',
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
});

function SearchCard(props) {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.searchCard} elevation={0}>
				<CardContent className={classes.content}>
					<CardMedia
						className={classes.media}
						image={props.book_image_link}
						title="Book Cover"
					/>
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





{/* <div className="card cardHold">
			<div className="card-content">
				<div className="content">
					<article className="media">
						<figure className="media-left">
							<p className="image">
								<img className="cardImg" src={props.book_image_link} alt={props.book_name}></img>
							</p>
						</figure>
						<div>
							<p className="titleSaved">{props.book_name}</p>
							<p className="authorSaved">{props.book_author}</p>
							<p className="subtitle desc">{props.book_desc}</p>
						</div>
						<div className="resultsBtns">
							<p className="control">
								<a href="#">
									<button id="viewBtn" className="button is-dark"><i className="fas fa-external-link-alt"></i></button>
								</a>
							</p>
							<p className="control">
								<button id="viewBtn" className="button is-link" onClick={() => props.handleSaveButton(props.id)}>Save<i className="fas fa-save"></i></button>
							</p>
						</div>
					</article>
				</div>
			</div>
		</div> */}