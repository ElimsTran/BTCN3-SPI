import React, { useEffect, useState } from 'react';
import {DataGrid} from '@material-ui/data-grid'

 

const ClassesArea = () => {
  const [classes, setClasses] = useState([]);
  const columns = [
    {field: 'id', headerName: 'Class_Id', width: 200},
    {field: 'Class_Name', headerName: 'Class_Name',   width: 200},
    {field: 'Teacher', headerName: 'Teacher',  width: 200},
    {field: 'Quantity', headerName: 'Quantity',  width: 200}
  ]
  useEffect(()=> {
    if(classes.length == 0){
      var url = 'https://btcn3-api-18127141.herokuapp.com/classes';
      fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setClasses(JSON.parse(JSON.stringify(data).replace(/Class_Id/g, "id")))
      }
       )
      .catch(function(error) {
        console.log(error);
      });
    }
  })
  console.log(classes)
  return (
    <div style= {{height: 300, width: '70%'}}>
        <DataGrid
        rows = {classes}
        columns = {columns}
        pageSize = {5}
        checkboxSelection
        />
    </div>
  )
}
export default ClassesArea;