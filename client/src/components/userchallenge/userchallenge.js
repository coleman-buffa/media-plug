import React from 'react';
import { makeStyles, Card, CardContent, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        marginTop: 10,
        borderLeft: '6px solid darkgreen',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        "&:hover": {
            transform: "scale(1.01)",
            boxShadow: "0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)",
            transition: ".1s",
        },
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