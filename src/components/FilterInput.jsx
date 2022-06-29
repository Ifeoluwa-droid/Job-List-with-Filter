import React from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import IconButton from '@mui/material/IconButton';

const FilterInput = React.forwardRef( (props, ref) =>
            <div className={`d-flex-row gap-2 ${props.className}`} style={{alignItems: 'center'}}>
                <IconButton onClick={props.onAddFilterItem}>
                    <AddRoundedIcon />
                </IconButton>
                <input className="filter-input" type="text" ref={ref} /> 
            </div>
        )
 
export default FilterInput;