import React, { useState, useEffect } from 'react';
import StatsCarousel from '../components/statsCarousel/statsCarousel';
import ProfHeader from "../components/profheader/profheader";
import API from "../utils/API";

function Profile() {

  const [challenges, setChallenges] = useState([]);
  const [userStats, setUserStats] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooksByUser();
  }, []);

const getAllBooksByUser = ()  => {
  API.booksByUser(1)
  .then(results => {
    console.log(results.data);
    //Do some work with the results
  })
  .catch(err => console.log(err));
}

  return (
    <div>
      <ProfHeader />
      <div className="statsCar" style={{ padding: 40 }}>
        <StatsCarousel />
      </div>
    </div>
  );
}

export default Profile;




// useStats = {
//   pages read: x,
//   books read: y,
//   genres_read: z,
//   average book length: a,
//   average rating:b
//   longest book read
//   shortest book read
// }