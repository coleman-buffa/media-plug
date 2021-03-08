import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AllChallengeCard from '../allchallengecard/allchallengecard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    allChallenges: {
        backgroundColor: 'white',
        height: '100vh',
        padding: 30,
        paddingTop: 20,
        fontSize: 30,
        fontFamily: 'Georgia'
    },
    contChallenge: {
        width: "95%",
        marginTop: 30,
    }
});
function AllChallenges() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.contChallenge}>
                <Paper>
                    <Typography className={classes.allChallenges} component="div">
                        All Challenges
                    <AllChallengeCard />
                    </Typography>
                </Paper>
            </Container>
        </React.Fragment>
    );
}

export default AllChallenges;