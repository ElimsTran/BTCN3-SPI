import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function submitForm(event) {  
    event.preventDefault();
    var form = document.querySelector("#createForm");
    var data = {
        className : form.querySelector('input[name="className"]').value,
        teacherName : form.querySelector('input[name="teacherName"]').value,
        quantity :  form.querySelector('input[name="quantity"]').value,
    }
    fetch("https://btcn3-api-18127141.herokuapp.com/classes/addClass",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(function(res){ 
        alert("Create class successful !!!");
    })
    .catch(function(res){ alert("Create class failure"); })
}
// export default CreateNew


export default function CreateNew({callback}) {
    const [className, setClassName] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event)=> {
    submitForm(event)
    callback()
    setOpen(false);
  }

  return (
    <div className={"d-flex justify-content-center "} >
      <Button size="medium" variant="contained" color="primary" onClick={handleClickOpen}>
        Add new
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Enter the class infomation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Paper className={"d-flex flex-conlumn justify-content-center "}>
                <form className={"d-flex flex-column pt-2 pl-3 pr-3 pb-2 "}  
                    id={"createForm"}
                    onSubmit={handleSubmit} >
                        <div className ={"d-flex justify-content-center mb-2"}>
                       
                        <TextField
                            label = "Class Name"
                            name = {"className"}
                            value={className}
                            onInput={ e=>setClassName(e.target.value)}
                        />
                        </div>
                        
                        <div className = {"d-flex justify-content-center  mb-2"}>
                        <TextField
                            label="Teacher Name"    
                            name = {"teacherName"}
                            value={teacherName}
                            onInput={ e=>setTeacherName(e.target.value)}
                        />
                        </div>
                       
                        <div className = {"d-flex justify-content-center mb-2"}>
                         <TextField
                            label="Quantity"
                            name = {"quantity"}
                            value={quantity}
                            type="number"
                            onInput={ e=>setQuantity(e.target.value)}
                        />
                        </div>
                </form>
            </Paper>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Exit</Button>
          <Button onClick={handleSubmit} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}