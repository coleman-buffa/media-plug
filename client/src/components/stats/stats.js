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

function Stats() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
            </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
            </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Stats;