import React from 'react';

const JobName = props => {
    return ( 
        <div className={`job-name ${props.className}`}>
            <p>{props.name}</p>
        </div>
     );
}
 
export default JobName;