import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

function SearchCard(props) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	return (
		// <React.Fragment>
		// 	<CssBaseline />
		// 	<Container maxWidth="90%">
		// 		<Typography component="div" style={{ backgroundColor: '#E8E8E8', height: '100vh', marginTop: 30 }} />
		// 	</Container>
		// </React.Fragment>
		<CardActionArea>
			<Card className={classes.root}>
				<CardMedia
					className={classes.cover}
					image="/static/images/cards/live-from-space.jpg"
					title="book cover"
				/>
				<CardContent>
					<Typography variant="h5" component="h2">
						Book title
        </Typography>
					<Typography className={classes.pos} color="textSecondary">
						Author
        </Typography>
					<Typography variant="body2" component="p">
						Description
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Save</Button>
				</CardActions>
			</Card>
		</CardActionArea >
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