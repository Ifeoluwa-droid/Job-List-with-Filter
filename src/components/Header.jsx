import JobFilter from "./JobFilter";
import React from 'react';

const Header = props => {
    return ( 
        <header>
            <JobFilter
                onAddNewSearchTerm={props.onAddNewSearchTerm}
                searchTerms={props.searchTerms}
                onClearFilter={props.onClearSearchTerms}
                onDeleteSearchTerm={props.onDeleteSearchTerm}
             />
        </header>
     );
}
 
export default Header;