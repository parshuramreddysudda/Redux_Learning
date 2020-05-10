import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import SnackBar from './Snackbar';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

const UserComponent = (props) => {

    const [open, setOpen] = useState(false);
    const [opeCount, setOpenCount] = useState(0);
    const [snakOpen, setSnakOpen] = useState(false)
    const [snakDesc, setSnakDesc] = useState("asd")
    const ApiCall = () => {

        if (opeCount === 0) {
          setOpenCount(1);
        }
        else {
            setOpen(true)
        }
      }
    useEffect(() => {
      ApiCall();
    }, [props.count]);
    const snakClose = () => {
        setSnakOpen(false)
    }
 

  const handleClose = () => {
    setSnakOpen(true);
    setSnakDesc("User id "+props.user+" is not Deleted");

    setOpen(false);
  };

  const deleteID = () => {
    props.delete()
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to Delete the User with ID {props.user}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteID} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <SnackBar show={snakOpen} desc={snakDesc} snakType="info" closeSnak={snakClose} />
    </div>
  );
}


export default UserComponent;
