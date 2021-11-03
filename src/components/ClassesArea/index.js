import React, { useEffect, useState } from 'react';
import {DataGrid} from '@material-ui/data-grid'

const ClassesArea = () => {
  const [classes, setClasses] = useState([]);
  const columns = [
    {field: 'id', headerName: 'Mã lớp' , flex: 1,},
    {field: 'Class_Name', headerName: 'Tên lớp', flex: 1,},
    {field: 'Teacher', headerName: 'Giảng viên', flex: 1,},
    {field: 'Quantity', headerName: 'Số lượng sinh viên', flex: 1,}
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
        alert(error);
      });
    }
  })
  console.log(classes)
  return (
    <div className= "d-flex justify-content-center p-5" style= {{height: 500}}  >
        <DataGrid 
        HorizontalAlignment="Stretch" 
        HorizontalContentAlignment="Stretch"
        rows = {classes}
        columns = {columns}
        pageSize = {5}
        checkboxSelection
        />
    </div>
  )
}
export default ClassesArea;