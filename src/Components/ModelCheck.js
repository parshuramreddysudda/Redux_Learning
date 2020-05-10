import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import { Paper, Grid, Button } from '@material-ui/core';
import MainServices from '../Services/MainServices';
import MainHelper from '../Services/MainHelper';

export default class Crud extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            id: "asd",
            name: 'asd',
            state: 'asd',
            cretaed: 'asd',
            updated: 'asd',
            type: 'sda',

        }
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
        
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
    }

    handleOpen = () => {
        this.setState({ modelOpen: true })
    };


    handleClose = () => {
        this.setState({ modelOpen: false })
    };


    render() {


        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item md={4} >

                        <TextField id="outlined-basic Id" label="Id" variant="outlined" name="id" size="small" onChange={this.handleChange} value={this.state.propsId|| ''} >

                        </TextField>
                    </Grid>
                    <Grid item md={4}>

                        <TextField id="outlined-basic name" label="Name" variant="outlined" name="name" size="small" onChange={this.handleChange} value={this.state.name|| ''} />

                    </Grid>
                    <Grid item md={4}>

                        <TextField id="outlined-basic state" label="State" variant="outlined" name="state" size="small" onChange={this.handleChange} value={this.state.state|| ''} />

                    </Grid>

                    <Grid item md={4}>

                        <TextField id="outlined-basic cretaed" label="Created" variant="outlined" name="created" size="small" onChange={this.handleChange} value={this.state.created|| ''} />

                    </Grid>
                    <Grid item md={4}>

                        <TextField id="outlined-basic updated" label="Updated" variant="outlined" name="updated" size="small" onChange={this.handleChange} value={this.state.updated|| ''} />

                    </Grid>

                    <Grid item md={4}>

                        <TextField id="outlined-basic type" label="Type" variant="outlined" size="small" name="type" onChange={this.handleChange} value={this.state.type|| ''} />

                    </Grid>

                </Grid>


            </div>
        );
    }
}
// const user=[
//     {id:"aslkjhgfdd",name:"as",state:"asd",created:"asd",updated:"asd",type:"ahsd"}
//   ];
// const [id,setId]=React.useState(props.user[0].id)
// console.log(id+"Id is")
// const [name,setName]=React.useState(props.user[0].name)
// const [state,setState]=React.useState(props.user[0].state)
// const [create,setCreate]=React.useState(props.user[0].created)
// const [update,setUpdate]=React.useState(props.user[0].updated)
// const [type,setType]=React.useState(props.user[0].type)

// const handleId=event=>{
//     console.log(event.target.value)
//     setId({id: event.target.value})
// }
