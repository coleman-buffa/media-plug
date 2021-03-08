import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import UserChallenge from "../userchallenge/userchallenge";
import Modal from "../modal/modal";
import "./mychallenges.css";
import Paper from '@material-ui/core/Paper';

function MyChallenges() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container style={{ width: "95%", marginTop: 30 }}>
                <Paper>
                    <Typography component="div"
                        style={{ backgroundColor: '#cfe8fc', height: '100vh', padding: 30, paddingTop: 20, fontSize: 30 }}>
                        <Modal />
                        <UserChallenge />
                    </Typography>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

export default MyChallenges;