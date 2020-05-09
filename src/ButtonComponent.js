import React from 'react'
import store from './store/index'
import Actions from './actions'
import { Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
// const storeHelper=store.getState();

const ButtonComponent = ({ withDraw, deposit }) => {
    const classes = useStyles();
    return (
        <div>

            <Grid container spacing={3}>
                <Grid item xs={12}>
    <Paper className={classes.paper}>Curently {store.getState().action} {store.getState().option} Total Amount is {store.getState().money}</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Button
                            data-tech={withDraw}
                            value={withDraw}
                            className="hello-btn"
                            onClick={dispatchActionWithdraw}
                        >
                            Withdraw Money
                            </Button>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Button
                            data-tech={deposit}
                            value={deposit}
                            className="hello-btn"
                            onClick={dispatchActionDeposit}
                        >
                            Deposit Money
                            </Button>
                    </Paper>
                </Grid>

            </Grid>


        </div>
    )
}


function dispatchActionWithdraw(e) {

    const tech = e.currentTarget.value;

    store.dispatch(Actions.setTypeWithDrawl(tech,"Withdrawn"))

    console.log("Current State", store.getState())

}

function dispatchActionDeposit(e) {

    const tech = e.currentTarget.value;
    store.dispatch(Actions.setTypeDeposit(tech,"Deposited"))
    console.log("Current State", store.getState())
}


export default ButtonComponent;
