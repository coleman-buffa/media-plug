import React, { useState, useEffect } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";

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
    width: 300
  },
  media: {
    height: 250
  },
  button: {
    position: 'relative',
    bottom: 0
  },
  set: {
    margin: "150px 0",
    borderBottom: "solid black ",
  },
  chListTitle: {
    borderBottom: "solid black ",
  }
});

function Explore() {
  const classes = useStyles();

  const [books, setBooks] = useState([]);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    getUnreadBooks();
    getUnsubbedChallenges();
  }, [setBooks, setChallenges]);

  const getUnreadBooks = () => {
    API.unreadBooksByUser(1)
      .then(results => {
        setBooks(results.data);
      });
  }

  const getUnsubbedChallenges = () => {
    API.unsubbedChallengesByUser(1)
      .then(results => {
        setChallenges(results.data);
      });
  }

  const handleAddBookToList = (bookId) => {
    // console.log(bookId);
    API.saveUserBook(1, bookId);
    getUnreadBooks();
  }
  const handleAddChallengeToList = (challengeId) => {
    // console.log(`Challenge ${id}`);
    API.saveUserChallenge(1, challengeId);
    getUnsubbedChallenges();
  }

  return (
    <Container className={classes.pagecont}>
      <Grid container>
        {/* Book List section */}
        <Container>
          <Typography variant="h2" className={classes.set}>Trending Books
				    <Grid item className={classes.section}>
              {books.map(book => (
                <Card elevation={5} className={classes.card} key={book.id}>
                  <CardMedia className={classes.media} image={book.book_image_link} title="book1" />
                  <CardContent>
                    <Typography variant="h4">{book.book_name}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined" onClick={() => handleAddBookToList(book.id)}>Add to List</Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Typography>
        </Container>

        {/* Challenge List section */}
        <Container>
          <Typography className={classes.chListTitle} variant="h2">Current Challenges</Typography>
          <Grid item className={classes.section}>
            {challenges.map(challenge => (
              <Card elevation={5} className={classes.card} key={challenge.id}>
                <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book1" />
                <CardContent>
                  <Typography variant="h4">{challenge.challenge_name}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" onClick={() => handleAddChallengeToList(challenge.id)}>Add to List</Button>
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