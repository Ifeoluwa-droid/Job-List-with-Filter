import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Dot = () => {
    return ( 
        <FontAwesomeIcon style={{transform: 'scale(.3)'}} icon={faCircle} />
     );
}
 
export default Dot;