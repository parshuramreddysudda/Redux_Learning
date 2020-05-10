import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, Button, TextField, Paper } from '@material-ui/core'
import MainServices from '../Services/MainServices';
import SnackBar from './Snackbar'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    padCenter: {
        paddingTop: "25px",
    }
}));

const CreateUser = (props) => {
    const initUser = { id: "", name: '', state: '', updated: "", created: '', type: '' };
    const [user, setUser] = useState(initUser)
    const [open, setOpen] = useState(false);
    const [snakType,setSnaktype]=useState("success")
    const [snakOpen, setSnakOpen] = useState(false)
    const [snakDesc, setSnakDesc] = useState("asd")
    const ApiCall = () => {

            if (props.Open) {
                setOpen(true)
            }
    }
    useEffect(() => {
        ApiCall();
    }, [props.count]);
    const snakClose = () => {
        setSnakOpen(false)
    }
    const classes = useStyles();
    const sendData = () => {
        if(user.id.length>35){
        MainServices.putUser(user.id, user.name, user.state, user.created, user.updated, user.type).then(res => {
        })
        setSnaktype("success")
        setSnakDesc("User ID with " + user.id + " has successfully Created")
        setSnakOpen(true);
        handleClose();
        props.closeModel()
        setUser(initUser)
    }
    else{
        setSnaktype("warning")
        setSnakDesc("User ID "+user.id+" doesn't have length of 36 letters, try to add more  characters")
        setSnakOpen(true);
    }
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper className={classes.paper}>
                        <h4> Here you can create User using following textfields</h4>
                        <Grid container spacing={3}>
                            <Grid item md={4} >
                                <TextField id="outlined-basic Id"  label="Id" variant="outlined" name="id" size="small"  onChange={handleChange} value={user.id}  >
                                </TextField>
                            </Grid>
                            <Grid item md={4}>
                                <TextField id="outlined-basic name" label="name" variant="outlined" name="name" size="small" onChange={handleChange} value={user.name} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField id="outlined-basic state" label="state" variant="outlined" name="state" size="small" onChange={handleChange} value={user.state} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField id="outlined-basic cretaed" label="created" variant="outlined" name="created" size="small" onChange={handleChange} value={user.created} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField id="outlined-basic updated" label="updated" variant="outlined" name="updated" size="small" onChange={handleChange} value={user.updated} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField id="outlined-basic type" label="type" variant="outlined" size="small" name="type" onChange={handleChange} value={user.type || ''} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" className={classes.padCenter}>
                            <Button variant="contained" color="primary" onClick={sendData} > Submit </Button>
                        </Grid>
                    </Paper>
                </Fade>
            </Modal>
            <SnackBar show={snakOpen} desc={snakDesc} snakType={snakType} closeSnak={snakClose} />
        </div>
    );
}

export default CreateUser;