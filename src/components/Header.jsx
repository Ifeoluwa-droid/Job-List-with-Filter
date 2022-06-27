import JobFilter from "./JobFilter";
import React from 'react';

const Header = () => {
    return ( 
        <header>
            <img src="./images/bg-header-desktop.svg" alt=""/>
            <JobFilter />
        </header>
     );
}
 
export default Header;