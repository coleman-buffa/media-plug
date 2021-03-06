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
    margin: "150px 0"
  }
});

function Explore() {
  const classes = useStyles();

  const [books, setBooks] = useState([]);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    getAllBooks();
    getAllChallenges();
  }, []);

  const getAllBooks = () => {
    API.getBooks()
      .then(results => {
        setBooks(results.data);
      });
  }

  const getAllChallenges = () => {
    API.getChallenges()
      .then(results => {
        console.log(results);
        setChallenges(results.data);
      });
  }


  return (
    <Container className={classes.pagecont}>
      <Grid container>
        {/* Book List section */}
        <Typography variant="h2" className={classes.set}>Book list
				<Grid item className={classes.section}>
            {books.map(book => (
              <Card elevation={5} className={classes.card} key={book.id}>
                <CardMedia className={classes.media} image={book.book_image_link} title="book1" />
                <CardContent>
                  <Typography variant="h4">{book.book_name}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined">Add to List</Button>
                </CardActions>
              </Card>
            ))}


            {/* <Card elevation={5} className={classes.card}>
              <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book2" />
              <CardContent>
                <Typography variant="h4">Starship Troopers</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined">Add to List</Button>
              </CardActions>
            </Card>

            <Card elevation={5} className={classes.card}>
              <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book3" />
              <CardContent>
                <Typography variant="h4">The Way of Kings</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined">Add to List</Button>
              </CardActions>
            </Card>

            <Card elevation={5} className={classes.card}>
              <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book4" />
              <CardContent>
                <Typography variant="h4">1984</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" className={classes.button}>Add to List</Button>
              </CardActions>
            </Card> */}
          </Grid>
        </Typography>
        {/* Challenge List section */}
        <Typography variant="h2">Challenge list</Typography>
        <Grid item className={classes.section}>
          <Card elevation={5} className={classes.card}>
            <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book1" />
            <CardContent>
              <Typography variant="h4">Challenge #1</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Add to List</Button>
            </CardActions>
          </Card>

          <Card elevation={5} className={classes.card}>
            <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book2" />
            <CardContent>
              <Typography variant="h4">Challenge #2</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Add to List</Button>
            </CardActions>
          </Card>

          <Card elevation={5} className={classes.card}>
            <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book3" />
            <CardContent>
              <Typography variant="h4">Challenge #3</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Add to List</Button>
            </CardActions>
          </Card>

          <Card elevation={5} className={classes.card}>
            <CardMedia className={classes.media} image="https://via.placeholder.com/150" title="book4" />
            <CardContent>
              <Typography variant="h4">Challenge #4</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Add to List</Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Explore;