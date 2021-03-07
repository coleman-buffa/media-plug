import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ChallengeCard from "../challengecard/challengecard";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import IconButton from '@material-ui/core/IconButton';
import "./mychallenges.css";

function MyChallenges() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container style={{width:"95%", marginTop: 30}}>       
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', padding: 30, paddingTop: 20, fontSize:30 }}>
                My Challenges 
                <IconButton className="playlistadd" color="primary" aria-label="add new challenge">
                <PlaylistAddIcon />
                </IconButton>
                <ChallengeCard />   
                    </Typography>       
            </Container>
        </React.Fragment>
    );
}

export default MyChallenges;