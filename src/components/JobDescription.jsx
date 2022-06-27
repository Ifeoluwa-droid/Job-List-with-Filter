import React from "react";
import Dot from "./Dot";


const JobDescription = props => {
    return ( 
        <div className="job-description">
            <p>{props.posted}</p>
            <Dot />
            <p>{props.duration}</p>
            <Dot />
            <p>{props.accessibility}</p>
        </div>
     );
}
 
export default JobDescription;