import React from 'react';
import "./profheader.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:1rem)': {
        fontSize: '2.0rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
};
const useStyles = makeStyles((theme) => ({
    profimage: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(5),
        },
    },
    large: {
        width: theme.spacing(28),
        height: theme.spacing(28),
    },
    welcome: {
        marginTop: 100,
        marginLeft: 5,
    }
}));
function ProfHeader(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.profimage}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                <ThemeProvider theme={theme}>
                    <Typography className={classes.welcome} variant="h3">Welcome, Jessny</Typography>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default ProfHeader;