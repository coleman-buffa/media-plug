import React, { useState, useEffect } from 'react';
import StatsCarousel from '../components/statsCarousel/statsCarousel';
import ProfHeader from "../components/profheader/profheader";
import MyChallenges from "../components/mychallenges/mychallenges";
import BookShelf from "../components/bookshelf/bookshelf";
import API from "../utils/API";

function Profile() {

	const [challenges, setChallenges] = useState([]);
	const [userStats, setUserStats] = useState({});
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getAllBooksByUser();
		getAllChallengesByUser();
	}, []);

	useEffect(() => {
		calculateStats()
	}, [books]);


	const getAllBooksByUser = () => {
		API.booksByUser(1)
			.then(results => {
				console.log(results.data);
				setBooks(results.data);//Do some work with the results
			})
			.catch(err => console.log(err));
	}

	const getAllChallengesByUser = () => {
		API.challengesByUser(1)
			.then(results => {
				console.log(results.data);
				setChallenges(results.data);//Do some work with the results
			})
			.catch(err => console.log(err));
	}

	const calculateStats = () => {
		let pagesRead = 0;
		let booksRead = 0;
		let avgLength = 0;
		let ratingSum = 0;
		let avgRating = 0;
		let min = Number.MAX_SAFE_INTEGER;
		let max = Number.MIN_SAFE_INTEGER;
		let shortestBook = "";
		let longestBook = "";
		let genresRead = {};
		books.forEach(book => {
			booksRead++;
			pagesRead += book.Book.book_page_count;
			ratingSum += book.Book.book_rating;

			if (book.Book.book_page_count > max) {
				max = book.Book.book_page_count
				longestBook = book.Book.book_name;
			}

			if (book.Book.book_page_count < min) {
				min = book.Book.book_page_count;
				shortestBook = book.Book.book_name;
			}

			if (genresRead[book.Book.book_genre]) {
				genresRead[book.Book.book_genre]++;
			} else {
				genresRead[book.Book.book_genre] = 1;
			}
		});

		avgLength = pagesRead / booksRead;
		avgRating = ratingSum / booksRead;

		setUserStats(
			{
				"booksRead": booksRead,
				"pagesRead": pagesRead,
				"avgLength": avgLength,
				"avgRating": avgRating,
				"shortestBook": [shortestBook, min],
				"longestBook": [longestBook, max],
				"genresRead": genresRead
			}
		)
	}

	return (
		<div>
			<ProfHeader />
			{books.map(book => (
				<BookShelf 
				key={book.id}
				id={book.id}
				image={book.volumeInfo.imageLinks.thumbnail}
				rating={book.volumeInfo.averageRating}
				/>
			))}
			<div className="statsCar" style={{ padding: 40 }}>
				<StatsCarousel />
				<MyChallenges />
			</div>
		</div>
	);
}

export default Profile;