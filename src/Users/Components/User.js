import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, Paper } from '@material-ui/core'
import MainServices from '../Services/MainServices';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
 
import CardContent from '@material-ui/core/CardContent';
 

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
  padCenter: {
    paddingTop: "25px",
  },
  root:{
    maxWidth:540,
  }
}));

const UserComponent = (props) => {

  const initUser = { id: "asd", name: 'asd', state: 'asd', updated: "asd", created: 'as', type: 'asd' };

  const [user, setUser] = useState(initUser);
  const [open, setOpen] = useState(false);
  const [opeCount, setOpenCount] = useState(0);
  const ApiCall = () => {
    let isMounted = true;
    MainServices.getUser(props.user).then(res => {
      if (isMounted)  setUser(res.data);;
      if (opeCount === 0) {
        setOpenCount(1);
      }
      else {
        handleOpen()
      }
    })
    return () => { isMounted = false };
  }

  useEffect(() => {
    ApiCall();
  }, [props.count]);

  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
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
            <h4> You are Viewing User With User Id {props.user}</h4>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item md>
                        <Paper className={classes.paper}>UserID :<b> {props.user}</b></Paper>
                      </Grid>
                      <Grid item md>
                        <Paper className={classes.paper}>UserName:<b> {user.name}</b></Paper>
                      </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                      <Grid item md>
                        <Paper className={classes.paper}>User State: <b>{user.state}</b></Paper>
                      </Grid>                    
                      <Grid item md>
                        <Paper className={classes.paper}>Updated at : <b>{user.updated}</b></Paper>
                      </Grid>
                      </Grid>
                      <Grid container spacing={3}>
                      <Grid item md>
                        <Paper className={classes.paper}>Created at :<b> {user.created}</b></Paper>
                      </Grid>
                      <Grid item md>
                        <Paper className={classes.paper}>Type : <b>{user.type}</b></Paper>
                      </Grid>
                    </Grid>

                  

                    
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>

          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}

export default UserComponent;