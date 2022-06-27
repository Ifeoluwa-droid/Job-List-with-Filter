import JobName from "./JobName";
import React from 'react';
import { IconButton } from "@mui/material";

const FilterTag = props => {
    return ( 
        <div style={{display: 'flex', alignItems: 'center'}}>
            <JobName
                className='filter-name'
                name={props.name}
             />
            <IconButton style={{padding: '0'}} onClick={() => {props.onDeleteTag(props.id)}}>
                <div className="remove-icon" style={{display: 'flex', alignItems: 'center'}}>
                    <img src="./images/icon-remove.svg" alt="" />
                </div>
            </IconButton>
        </div>
     );
}
 
export default FilterTag;