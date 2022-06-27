import React from 'react';


const CompanyName = props => {
    return ( 
        <div style={{height: 'fit-content'}}><p className="company-name">{props.name}</p></div>
    )
}
 
export default CompanyName;