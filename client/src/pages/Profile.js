import React, { useState, useEffect } from 'react';
import StatsCarousel from '../components/statsCarousel/statsCarousel';
import ProfHeader from "../components/profheader/profheader";
import MyChallenges from "../components/mychallenges/mychallenges";
import BookShelf from "../components/bookshelf/bookshelf";
import API from "../utils/API";
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {

  const [userId, setUserId] = useState(0);
  const [challenges, setChallenges] = useState([]);
  const [userStats, setUserStats] = useState({});
  const [books, setBooks] = useState([]);

  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    getAllBooksByUser();
    getAllChallengesByUser();
  }, [userId]);

  useEffect(() => {
    calculateStats()
  }, [books]);

  useEffect(() => {
    if (user) {
      getCurrentUserId()
    }
  }, [isAuthenticated, user]);

  const getCurrentUserId = () => {
    API.checkUser(user.email)
      .then(result => {
        setUserId(result.data[0].id);
      })
      .catch(err => console.log(err));
  }

  const getAllBooksByUser = () => {
    API.booksByUser(userId)
      .then(results => {
        setBooks(results.data);//Do some work with the results
      })
      .catch(err => console.log(err));
  }

  const getAllChallengesByUser = () => {
    API.challengesByUser(userId)
      .then(results => {
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

    avgLength = Math.floor(pagesRead / booksRead);
    avgRating = (ratingSum / booksRead).toFixed(1);
    // avgLength = Math.floor(avgLength)
    setUserStats(
      {
        "booksRead": booksRead,
        "pagesRead": pagesRead,
        "avgLength": avgLength,
        "avgRating": avgRating,
        "shortestBook": shortestBook,
        "min": min,
        "longestBook": longestBook,
        "max": max,
        "genresRead": genresRead
      }
    )
  }

  return (
    <div>
      <ProfHeader 
        userName={user.nickname}
        image={user.picture}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {books.map(book => (
          <BookShelf
            key={book.Book.id}
            id={book.Book.id}
            image={book.Book.book_image_link}
            rating={book.Book.book_rating}
          />
        ))}
      </div>
      <div className="shelf"></div>
      <div className="statsCar" style={{ padding: 40 }}>
        <StatsCarousel
          userStats={userStats}
        />
      </div>
      <MyChallenges
        challenges={challenges}
        userId={userId}
      />
    </div>
  );
}

export default Profile;