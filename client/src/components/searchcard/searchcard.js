import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function SearchCard(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="90%">
				<Typography component="div" style={{ backgroundColor: '#E8E8E8', height: '100vh', marginTop: 30 }} />
			</Container>
		</React.Fragment>
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