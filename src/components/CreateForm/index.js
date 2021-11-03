import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
const CreateNew = () => {
        const [className, setClassName] = useState('');
        const [teacherName, setTeacherName] = useState('');
        const [quantity, setQuantity] = useState('');
        
    
        return( <div >
                <Paper className={"name"}>
                    <form className={"container"}  
                    id={"createForm"}
                    onSubmit={handleSubmit} >
                        Class Name:
                        <TextField 
                            name = {"className"}
                            value={className}
                            onInput={ e=>setClassName(e.target.value)}
                        />
                        Teacher Name:
                        <TextField
                            name = {"teacherName"}
                            value={teacherName}
                            onInput={ e=>setTeacherName(e.target.value)}
                        />
                         Quantity:
                         <TextField
                            name = {"quantity"}
                            value={quantity}
                            type="number"
                            onInput={ e=>setQuantity(e.target.value)}
                        />
                        <Button
                            type="submit"
                           
                            className={"container"}
                        >
                            Create New Class
                        </Button>
                    </form>
                </Paper>
            </div>
        );
}
function handleSubmit(event) { 
    event.preventDefault();
    var form = document.querySelector("#createForm");
    var data = {
        className : form.querySelector('input[name="className"]').value,
        teacherName : form.querySelector('input[name="teacherName"]').value,
        quantity :  form.querySelector('input[name="quantity"]').value,
      }
      console.log(data)
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
        
        console.log(res) })
    .catch(function(res){ console.log("Loi") })
}
export default CreateNew