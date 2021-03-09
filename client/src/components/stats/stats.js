import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
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
                {/* <Typography variant="body2" component="p">
                    {props.stat}
                </Typography> */}
            </CardContent>
        </Card>
    );
}

export default Stats;