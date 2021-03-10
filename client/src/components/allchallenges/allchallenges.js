import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AllChallengeCard from '../allchallengecard/allchallengecard';
import { makeStyles } from '@material-ui/core/styles';
import API from '../../utils/API';

const useStyles = makeStyles({
    allChallenges: {
        fontSize: 50,
        fontFamily: 'Georgia',
        borderBottom: "solid black ",
    },
    contChallenge: {
        width: "95%",
        marginTop: 50,
        marginBottom: 100
    }
});

function AllChallenges() {
    const classes = useStyles();
    const [allChallenges, setAllChallenges] = useState([]);

    useEffect(() => {
        getAllChallenges();
    }, []);

    const getAllChallenges = () => {
        API.getChallenges()
            .then(results => {
                console.log(results)
                setAllChallenges(results.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.contChallenge}>
                    <Typography className={classes.allChallenges} component="div">
                        All Challenges
                    </Typography>
                    {allChallenges.map(challenge => (
                        <AllChallengeCard 
                        key={challenge.id}
                        id={challenge.id}
                        name={challenge.challenge_name}
                        desc={challenge.challenge_desc}
                        />
                    ))}
            </Container>
        </React.Fragment>
    );
}

export default AllChallenges;