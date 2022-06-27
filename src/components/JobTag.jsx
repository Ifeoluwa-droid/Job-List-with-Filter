import React from 'react';


const JobTag = props => {
    return ( 
        <div class="job-tag" style={{backgroundColor: props.tag === 'NEW!' ? 'hsl(180, 29%, 50%)' : 'hsl(180, 14%, 20%)'}}>{props.tag}</div>
     );
}
 
export default JobTag;