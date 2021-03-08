import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        marginTop: 10,
        // backgroundColor: ,
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
    },
    chTitle: {
        fontSize: 20,
    }
});

function UserChallenge(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
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