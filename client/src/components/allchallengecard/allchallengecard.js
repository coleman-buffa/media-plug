import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        marginTop: 20,
        backgroundColor: '#f5f5f5',
        borderLeft: '6px solid green',
        height: 125,
    },
    chdesc: {
        marginTop: 10,
        marginLeft: 2,
        fontFamily: 'Arial',
        fontSize: 20,
    },
    chTitle: {
        fontFamily: "Garamond",
        fontSize: 30,
    },
});

function AllChallengeCard(props) {
    const classes = useStyles();
    
    return (
        <Card className={classes.root} elevation={8}>
            <CardContent>
                <Typography className={classes.chTitle} variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography className={classes.chdesc} variant="body2" component="p">
                    {props.desc}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default AllChallengeCard;