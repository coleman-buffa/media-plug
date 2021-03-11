import React from 'react';
import "./bookshelf.css";
import { makeStyles, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    shelfImage: {
        height: 260,
        width: 190,
        marginLeft: 10,
        marginRight: 10,
        "&:hover": {
            transform: "scale(1.01)",
            boxShadow: "0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)",
            transition: ".1s",
        },
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
        </div>
    );
}

export default BookShelf;

