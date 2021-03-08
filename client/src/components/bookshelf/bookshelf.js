import React from 'react';
import "./bookshelf.css";
import { makeStyles, Card, CardMedia, CardContent, Box } from '@material-ui/core';
// import { Rating } from '@material-ui/lab';

const useStyles = makeStyles({
    shelfImage: {
        height: 260,
        width: 190,
        marginLeft: 10,
        marginRight: 10,
    },
    rating: {
        marginLeft: 10,
        backgroundColor: "black",
        padding: 10,
        width: 190,
        marginTop: 0,
    }
});

function BookShelf(props) {
    const classes = useStyles();
    return (
        <div>
            <CardMedia
                className={classes.shelfImage}
                image={props.image}
                title="Book Cover"

            />
            {/* <Box component="fieldset" borderColor="transparent">
                        <Rating className={classes.rating} name="read-only" value={props.rating} readOnly />
                    </Box>  */}
        </div>
    );
}

export default BookShelf;

