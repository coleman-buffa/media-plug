import React from 'react';
import { makeStyles, CssBaseline, Typography, Container, Paper } from '@material-ui/core';
import UserChallenge from "../userchallenge/userchallenge";
import Modal from "../modal/modal";
import "./mychallenges.css";

const useStyles = makeStyles({
    userChCont: {
        backgroundColor: '#cfe8fc',
        height: '100vh',
        padding: 30,
        paddingTop: 20,
        fontSize: 30
    },
    root: {
        width: "95%",
        marginTop: 30,
    }
});

function MyChallenges() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.root}>
                <Paper>
                    <Typography component="div" className={classes.userChCont}>
                        <Modal />
                        <UserChallenge />
                    </Typography>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

export default MyChallenges;