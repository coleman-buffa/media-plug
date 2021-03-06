import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
import "./stats.css";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        background: 'linear-gradient(lightgrey, white, white, lightgrey)',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        marginTop: 10,
        color: 'black',
    },
    pos: {
        marginBottom: 12,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
});

function Stats(props) {
    const classes = useStyles();
    return (
        <Card className="animate__animated animate__flipInX card">
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