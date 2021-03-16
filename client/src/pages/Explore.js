import React, { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles({
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 150,
  },
  sectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  card: {
    backgroundColor: '#F5F5F5',
    margin: 20,
    width: 300,
    height: 360,
    '&:hover': {
      transform: "scale(1.01)",
      boxShadow: "0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)",
      transition: ".1s",
    },
  },
  chCard: {
    backgroundColor: '#F5F5F5',
    margin: 20,
    width: 280,
    height: 290,
    borderLeft: '6px solid darkgreen',
    '&:hover': {
      transform: "scale(1.01)",
      boxShadow: "0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)",
      transition: ".1s",
    },
  },
  userCard: {
    backgroundColor: '#F5F5F5',
    margin: 20,
    width: 280,
    height: 100,
    borderLeft: '6px solid darkgreen',
    '&:hover': {
      transform: "scale(1.01)",
      boxShadow: "0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)",
      transition: ".1s",
    },
  },
  media: {
    height: 260
  },
  set: {
    marginTop: 100,
    borderBottom: "solid black",
  },
  chListTitle: {
    marginTop: 40,
    borderBottom: "solid black",
  },
  bookName: {
    fontSize: 22,
    textAlign: 'center',
  },
  chName: {
    fontSize: 24,
    marginTop: 25,
    marginBottom: 0,
    textAlign: 'center',
  },
  userName: {
    fontSize: 24,
    marginTop: 25,
    marginBottom: 0,
    textAlign: 'center',
  },
  chDesc: {
    fontSize: 18,
    // marginBottom: 30,
    textAlign: 'center',
  },
  addBtn: {
    marginTop: 30,
    marginBottom: 30,
    // marginLeft: 60,
    position: 'absolute',
    '&:hover': {
      backgroundColor: 'darkgreen',
      color: 'white',
    },
  },
  addCh: {
    marginTop: 20,
    position: 'absolute',
    '&:hover': {
      backgroundColor: 'darkgreen',
      color: 'white',
    },
  },
  chDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  bookDiv: {
    display: 'flex',
    justifyContent: 'center',
  }
});

function Explore() {
  const classes = useStyles();

  const [userId, setUserId] = useState(0);
  const [books, setBooks] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [users, setUsers] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    getUnreadBooks();
    getUnsubbedChallenges();
    getOtherUsers();
  }, [userId]);

  useEffect(() => {
    if (user) {
      getCurrentUserId()
    }
  }, [isAuthenticated, user]);
  const getUnreadBooks = () => {
    API.unreadBooksByUser(userId)
      .then(results => {

        setBooks(results.data);
      });
  }

  const getCurrentUserId = () => {
    API.checkUser(user.email)
      .then(result => {
        setUserId(result.data[0].id);
      })
      .catch(err => console.log(err));
  }

  const getUnsubbedChallenges = () => {
    API.unsubbedChallengesByUser(userId)
      .then(results => {
        setChallenges(results.data);
      });
  }

  const getOtherUsers = () => {
    API.otherUsers(userId)
      .then(results => {
        setUsers(results.data);
      })
  }

  const handleAddBookToList = (bookId) => {
    // console.log(bookId);
    API.saveUserBook(userId, bookId);
    getUnreadBooks();
  }

  const handleAddChallengeToList = (challengeId) => {
    // console.log(`Challenge ${id}`);
    API.saveUserChallenge(userId, challengeId);
    getUnsubbedChallenges();
  }

  return (
    <Grid container className={classes.gridContainer} >
      {/* Book List section */}
      <section>
        <Typography variant="h2" className={classes.set}>Trending Books</Typography>
        <Container className={classes.sectionContainer}>
          {/* Map through books array */}
          {books.map(book => (
            <Grid item className={classes.section}>
              <Card elevation={5} className={classes.card} key={book.id}>
                <CardMedia className={classes.media} image={book.book_image_link} title="book1" />
                <CardContent>
                  <Typography className={classes.bookName} variant="h4">{book.book_name}</Typography>
                </CardContent>
                <CardActions className={classes.bookDiv}>
                  <Button className={classes.addBtn} variant="outlined" onClick={() => handleAddBookToList(book.id)}>Add to List</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Container>
      </section>

      {/* Challenge List section */}
      <section>
        <Typography className={classes.chListTitle} variant="h2">Current Challenges</Typography>
        <Container className={classes.sectionContainer}>
          {/* Map through challenges array */}
          {challenges.map(challenge => (
            <Grid item className={classes.section}>
              <Card elevation={5} className={classes.chCard} key={challenge.id}>
                <CardContent>
                  <Typography className={classes.chName} variant="h4">{challenge.challenge_name}</Typography>
                </CardContent>
                <CardContent>
                  <Typography className={classes.chDesc} variant="h4">{challenge.challenge_desc}</Typography>
                </CardContent>
                <CardActions className={classes.chDiv}>
                  <Button className={classes.addCh} variant="outlined" onClick={() => handleAddChallengeToList(challenge.id)}>Add to List</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Container>
      </section>

      {/* User list section */}
      <section>
        <Typography className={classes.chListTitle} variant="h2">Connect With Users</Typography>
        <Container className={classes.sectionContainer}>
          {/* Map through challenges array */}
          {users.map(user => (
            <Grid item className={classes.section}>
              <Card elevation={5} className={classes.userCard} key={user.id}>
                <CardContent>
                  <Typography className={classes.userName} variant="h4">{user.user_name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Container>
      </section>
    </Grid>
  );
}

export default Explore;