import React from 'react';
import "./bookshelf.css";
import { makeStyles, Card, CardMedia, CardContent } from '@material-ui/core';


const useStyles = makeStyles({
userCard: {
    width: 220,
    height: 250,
    marginLeft: 25,
},
shelfContent: {
    // display: 'flex',
    // justifyContent: 'space-evenly',
},
shelfImage: {
    height: 220,
    minWidth: 180,
},
});

function BookShelf(props) {
    const classes = useStyles();
    return (
        <div>
            < Card className={classes.userCard} elevation={24}>
                <CardContent className={classes.shelfContent}>
                    <CardMedia
                        className={classes.shelfImage}
                        image={props.image}
                        title="Book Cover"
                    />
                </CardContent>
            </Card >
            <div className="shelf"></div>
        </div>
    );
}

export default BookShelf;

{/* <div className="container">
        <div className="booksRead"><img src={props.image} /></div>
        <div className="shelf"></div>
</div> */}

{/* <div className="shelf"></div> */ }
