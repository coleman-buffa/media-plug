import React from 'react';

function SearchCard() {
	return (
		<div className="card cardHold">
			<div className="card-content">
				<div className="content">
					<article className="media">
						<figure className="media-left">
							<p className="image">
								<img className="cardImg"></img>
							</p>
						</figure>
						<div>
							<p className="titleSaved"></p>
							<p className="authorSaved"></p>
							<p className="subtitle desc"></p>
						</div>
						<div className="resultsBtns">
							<p className="control">
								<a href="">
									<button id="viewBtn" className="button is-dark"><i className="fas fa-external-link-alt"></i></button>
								</a>
							</p>
							<p className="control">
								<button id="viewBtn" className="button is-link"><i className="fas fa-save"></i></button>
							</p>
						</div>
					</article>
				</div>
			</div>
		</div>
	);
};

export default SearchCard;