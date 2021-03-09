import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        marginTop: 10,
    },
    pos: {
        marginBottom: 12,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

function Stats(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.stat}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Stats;