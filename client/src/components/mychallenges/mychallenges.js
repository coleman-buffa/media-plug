import React from 'react';
import { makeStyles, CssBaseline, Typography, Container, Paper } from '@material-ui/core';
import UserChallenge from "../userchallenge/userchallenge";
import Modal from "../modal/modal";
import "./mychallenges.css";

const useStyles = makeStyles({
    userChCont: {
        opacity: '1',
        height: '100vh',
        padding: 30,
        paddingTop: 20,
        fontSize: 30
    },
    root: {
        width: "95%",
        marginTop: 30,
        marginBottom: 100
    }
});

function MyChallenges(props) {
    const classes = useStyles();
    const local = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <Container id="myChall" className={classes.root}>
                <Modal />
                {local.challenges.map(user => (
                    <UserChallenge
                        key={user.Challenge.id}
                        id={user.Challenge.id}
                        name={user.Challenge.challenge_name}
                        desc={user.Challenge.challenge_desc}
                    />
                ))}
            </Container>
        </React.Fragment>
    );
}

export default MyChallenges;