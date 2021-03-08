import React from 'react';
import "./bookshelf.css";
import { makeStyles, Card, CardMedia, CardContent, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';


const useStyles = makeStyles({
    userCard: {
        width: 220,
        height: 270,
        marginLeft: 25,
    },
    shelfContent: {
        // display: 'flex',
        // justifyContent: 'space-evenly',
    },
    shelfImage: {
        height: 250,
        width: 190,
        marginLeft: 25,
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
    // const [value, setValue] = React.useState(2);
    const classes = useStyles();
    return (
        <div>
            {/* < Card className={classes.userCard} elevation={24}>
                <CardContent className={classes.shelfContent}> */}
                    <CardMedia
                        className={classes.shelfImage}
                        image={props.image}
                        title="Book Cover"
                    />
                    {/* <Box component="fieldset" borderColor="transparent">
                        <Rating className={classes.rating} name="read-only" value={props.rating} readOnly />
                    </Box> */}
                {/* </CardContent>
            </Card > */}
        </div>
    );
}

export default BookShelf;

{/* <div className="container">
        <div className="booksRead"><img src={props.image} /></div>
        <div className="shelf"></div>
</div> */}

{/* <div className="shelf"></div> */ }
