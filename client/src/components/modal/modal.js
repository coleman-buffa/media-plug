import React, { useRef } from 'react';
import { makeStyles, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import API from '../../utils/API';

const useStyles = makeStyles({
    playlistAdd: {
        color: 'black',
        float: 'right',
        "&:hover": {
            color: 'green',
        },
    },
    challengeTitle: {
        fontSize: 35,
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        marginLeft: 5,
        borderBottom: "solid black ",
    }
});
function Modal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const nameRef = useRef("");
    const descRef = useRef("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddChallenge = e => {
        e.preventDefault();

        let chal = {
            "challenge_name": nameRef.current.value,
            "challenge_desc": descRef.current.value
        }
        API.saveChallenge(chal)
            .then(result => {
                API.saveUserChallenge(props.userId, result.data.id)
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

        handleClose();
    }

    return (
        <div>
            <Typography className={classes.challengeTitle} >
                My Challenges
                <IconButton className={classes.playlistAdd} aria-label="add new challenge" onClick={handleClickOpen}>
                    <PlaylistAddIcon />
                </IconButton>
            </Typography>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Challenge</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To create a new challenge, please enter a title and description. Upon submitting,
                        you will be able to view the challenge from your profile and the challenges page.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        type="email"
                        fullWidth
                        inputRef={nameRef}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Description"
                        type="email"
                        fullWidth
                        inputRef={descRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddChallenge} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Modal;