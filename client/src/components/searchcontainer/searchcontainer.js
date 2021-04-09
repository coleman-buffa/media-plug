import React, { useRef, useState, useEffect } from 'react';
import SearchBar from '../searchbar/searchbar';
import SearchCard from '../searchcard/searchcard';
import API from '../../utils/API';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles({
	form: {
		marginTop: 50
	},
	searchCont: {
		marginBottom: 100
	}
});

function SearchContainer() {

	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [userId, setUserId] = useState(0);
	const { isAuthenticated, user } = useAuth0();
	const inputRef = useRef("");

	useEffect(() => {
    if (user) {
      getCurrentUserId()
    }
  }, [isAuthenticated, user]);

	const classes = useStyles();

	const getCurrentUserId = () => {
    API.checkUser(user.email)
      .then(result => {
        setUserId(result.data[0].id);
      })
      .catch(err => console.log(err));
  }

	const getSearchResults = searchTerm => {
		API.searchBookName(searchTerm)
			.then(result => {
				setSearchResults(result);
			})
			.catch(err => console.log(err));
	}

	const handleInputSearch = e => {
		e.preventDefault();

		let str = inputRef.current.value;
		let replaced = str.split(' ').join('+');
		setSearchTerm(replaced);
		inputRef.current.value = "";
		getSearchResults(replaced);
	}

	const handleSaveButton = id => {
		let tempArr = searchResults.filter(book => book.id === id);
		console.log(tempArr);
		API.saveBook({
			book_name: tempArr[0].volumeInfo.title,
			book_author: tempArr[0].volumeInfo.authors.toString(),
			book_desc: tempArr[0].volumeInfo.description ? tempArr[0].volumeInfo.description : "Description not found",
			book_image_link: tempArr[0].volumeInfo.imageLinks.thumbnail ? tempArr[0].volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/150",
			book_genre: tempArr[0].volumeInfo.categories[0] ? tempArr[0].volumeInfo.categories[0] : "NA",
			book_page_count: tempArr[0].volumeInfo.pageCount ? tempArr[0].volumeInfo.pageCount : 0,
			book_rating: tempArr[0].volumeInfo.averageRating ? tempArr[0].volumeInfo.averageRating : 0,
			book_published_date: tempArr[0].volumeInfo.publishedDate ? tempArr[0].volumeInfo.publishedDate : "1900-01-01"
		})
			.then(result => {
				console.log(result);
				API.saveUserBook(userId, result.data.id);
			})
			.catch(err => console.log(err));

		setSearchResults([]);
	}

	return (
		<div>
			<Container className={classes.searchCont}>
				<Paper elevation={5} className={classes.form}>
					<SearchBar
						inputRef={inputRef}
						value={searchTerm}
						handleInputSearch={handleInputSearch}
					/>
				</Paper>
				{searchResults.map(book => (
					<SearchCard
						key={book.etag}
						id={book.id}
						book_name={book.volumeInfo.title}
						book_author={book.volumeInfo.authors}
						book_desc={book.volumeInfo.description}
						book_image_link={book.volumeInfo.imageLinks.thumbnail}
						book_genre={book.volumeInfo.categories}
						book_page_count={book.volumeInfo.pageCount}
						book_rating={book.volumeInfo.averageRating}
						book_published_date={book.volumeInfo.publishedDate}
						handleSaveButton={handleSaveButton}
					/>
				))}
			</Container>
		</div>
	);
};

export default SearchContainer;