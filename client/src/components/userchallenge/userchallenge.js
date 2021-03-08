import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        marginTop: 10,
        borderLeft: '6px solid rgb(0, 128, 255)',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    chDescription: {
        marginTop: 10,
        marginLeft: 2,
        fontFamily: 'Arial',
        fontSize: 16,
    },
    chTitle: {
        fontSize: 22,
        fontFamily: "Garamond",
        fontWeight: 'bold',
    },
});

function UserChallenge(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={8}>
            <CardContent>
                <Typography className={classes.chTitle} variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography variant="body2" component="p" className={classes.chDescription}>
                    {props.desc}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default UserChallenge;