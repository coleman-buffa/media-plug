import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        marginTop: 10,
        backgroundColor: '#f5f5f5',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    chdesc: {
        marginTop: 10,
        marginLeft: 2,
    }
});

function AllChallengeCard() {
    const classes = useStyles();
    
    return (
        <Card className={classes.root} elevation={8}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Challenge Title
                </Typography>
                <Typography className={classes.chdesc} variant="body2" component="p">
                    Challenge description
                </Typography>
            </CardContent>
        </Card>
    );
}

export default AllChallengeCard;