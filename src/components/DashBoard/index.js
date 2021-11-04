
// import React, { useState } from 'react';
import ClassesArea from '../ClassesArea';
import CreateNew from '../CreateForm'
// const DashBoard = () => {
//     const ClassListTittle = "All Classes";
//     const CreateClassTittle = "Create Class"
//     return (
//         <div>
//             <h2>
//             {ClassListTittle}
//             </h2>
//             <div>
//             <ClassesArea />
//             </div>
//             <h2>{CreateClassTittle}</h2>
//             <div>
//                 <CreateNew></CreateNew>
//             </div>
//         </div>
//     )
// }
// export default DashBoard;


import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

 const DenseAppBar = (props) => {
  const [classes, setClasses] = useState([]);
  const update = (newData) => {
    setClasses(newData)
  }
  return (
    <div >
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton  color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Class List
          </Typography>
        </Toolbar>
      </AppBar>
      <ClassesArea _classes = {classes}/>
      <CreateNew callback= {update}/>
   
    </div>
  );
}



export default withStyles(styles)(DenseAppBar);
