
import React, { useState } from 'react';
import ClassesArea from '../ClassesArea';
import CreateNew from '../CreateForm'
const DashBoard = () => {
    const ClassListTittle = "All Classes";
    const CreateClassTittle = "Create Class"
    return (
        <div>
            <h2>
            {ClassListTittle}
            </h2>
            <div>
            <ClassesArea/>
            </div>
            <h2>{CreateClassTittle} </h2>
            <div>
                <CreateNew></CreateNew>
            </div>
        </div>
    )
}
export default DashBoard;


 