import React, { useState, useEffect } from 'react';
import StatsCarousel from '../components/statsCarousel/statsCarousel';
import ProfHeader from "../components/profheader/profheader";
import MyChallenges from "../components/mychallenges/mychallenges";
import API from "../utils/API";

function Profile() {

	const [challenges, setChallenges] = useState([]);
	const [userStats, setUserStats] = useState({});
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getAllBooksByUser();
		getAllChallengesByUser();
		calculateStats();
	}, []);

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
		// pages read: x,
		// books read: y,
		// genres_read: z,
		// average book length: a,
		// average rating: b
		// longest book read
		// shortest book read
		let pagesRead = 0;
		let booksRead = 0;

		books.forEach(book => {
			booksRead++;
			pagesRead += book.Book.book_page_count;
		});

		setUserStats(
			{
				"booksRead": booksRead,
				"pagesRead": pagesRead
			}
		)
	}

	return (
		<div>
			<ProfHeader />
			<div className="statsCar" style={{ padding: 40 }}>
				<StatsCarousel />
				<MyChallenges />
			</div>
		</div>
	);
}

export default Profile;