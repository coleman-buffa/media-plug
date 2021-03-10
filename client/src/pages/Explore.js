import React, { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import { useAuth0 } from '@auth0/auth0-react';


const useStyles = makeStyles({
  pagecont: {
    alignContent: "center"
  },
  section: {
    display: "flex",
    justifyContent: 'center',
  },
  card: {
    margin: 20,
    width: 300,
    '&:hover': {
      transform: "scale(1.01)",
			boxShadow: "0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)",
			transition: ".1s",
    },
  },
  media: {
    height: 250
  },
  button: {
    position: 'relative',
    bottom: 0,
  },
  set: {
    marginTop: 100,
    borderBottom: "solid black ",
  },
  chListTitle: {
    borderBottom: "solid black ",
  },
  bookName: {
    fontSize: 30,
    textAlign: 'center',
  },
  addBtn: {
    marginLeft: "28%",
    '&:hover': {
      backgroundColor: 'darkgreen',
      color: 'white',
    },
  },
});

function Explore() {
  const classes = useStyles();

  const [userId, setUserId] = useState(0);
  const [books, setBooks] = useState([]);
  const [challenges, setChallenges] = useState([]);

  const { isAuthenticated, user } = useAuth0();


  useEffect(() => {
    getUnreadBooks();
    getUnsubbedChallenges();
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
    <Container className={classes.pagecont}>
      <Grid container>
        {/* Book List section */}
        <Container>
          <Typography variant="h2" className={classes.set}>Trending Books</Typography>
          <Grid item className={classes.section}>
            {books.map(book => (
              <Card elevation={5} className={classes.card} key={book.id}>
                <CardMedia className={classes.media} image={book.book_image_link} title="book1" />
                <CardContent>
                  <Typography className={classes.bookName} variant="h4">{book.book_name}</Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.addBtn} variant="outlined" onClick={() => handleAddBookToList(book.id)}>Add to List</Button>
                </CardActions>
              </Card>
            ))}
          </Grid>

        </Container>

        {/* Challenge List section */}
        <Container>
          <Typography className={classes.chListTitle} variant="h2">Current Challenges</Typography>
          <Grid item className={classes.section}>
            {challenges.map(challenge => (
              <Card elevation={5} className={classes.card} key={challenge.id}>
                {/* <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book1" /> */}
                <CardContent>
                  <Typography className={classes.bookName} variant="h4">{challenge.challenge_name}</Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.addBtn} variant="outlined" onClick={() => handleAddChallengeToList(challenge.id)}>Add to List</Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
}

export default Explore;