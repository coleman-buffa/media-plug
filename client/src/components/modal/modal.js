import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

import "./modal.css";
import API from '../../utils/API';

function Modal() {
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
                API.saveUserChallenge(1, result.data.id)
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

        handleClose();
    }

    return (
        <div>
            <Typography style={{ fontSize: 30 }}  >
                My Challenges
                <IconButton className="playlistadd" color="primary" aria-label="add new challenge" onClick={handleClickOpen}>
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
                        id="name"
                        label="Title"
                        type="email"
                        fullWidth
                        inputRef={nameRef}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
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