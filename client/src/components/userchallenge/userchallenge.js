import React from 'react';
import { makeStyles, Card, CardContent, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        // minWidth: 275,
        marginTop: 10,
        borderLeft: '6px solid green',
        maxWidth: '50%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    chDescription: {
        marginTop: 10,
        marginLeft: 2,
        fontFamily: 'Arial',
        fontSize: 18,
    },
    chTitle: {
        fontSize: 24,
        fontFamily: "Garamond",
        fontWeight: 'bold',
    },
});

function UserChallenge(props) {
    const classes = useStyles();

    return (
        <Grid container alignItems="stretch" spacing={3}>
            <Grid item xs={12}>
                <Card className={classes.card} elevation={8}>
                    <CardContent>
                        <Typography className={classes.chTitle} variant="h5" component="h2">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.chDescription}>
                            {props.desc}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default UserChallenge;