import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		marginTop: 10,
		width: 275,
		height: 350,
	},
	media: {
		height: 200,
	},
});
function SearchCard(props) {
	const classes = useStyles();

	return (
		<div style={{display:"flex", justifyContent:"space-evenly"}}>
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={props.book_image_link}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
					{props.book_name}
						</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
					{props.book_author}
						</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Save
        </Button>
				<Button size="small" color="primary">
					Learn More
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
								<button id="viewBtn" className="button is-link" onClick={() => props.handleSaveButton(props.id)}><i className="fas fa-save"></i></button>
							</p>
						</div>
					</article>
				</div>
			</div>
		</div> */}