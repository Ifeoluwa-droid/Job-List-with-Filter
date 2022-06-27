import React, {useState} from "react";
// import FilterTag from "./FilterTag";
import Header from "./Header";
import Jobs from "./Jobs";



const App = () => {

    const [searchTerms, setSearchTerms] = useState([]);
 
    const handleClear = () => {
       setSearchTerms([]);
    }
 
    const handleAdd = (idGenerator, newVal) => {
       setSearchTerms(prevValue => [...prevValue, {id: idGenerator(), value: newVal}]);
       console.log(searchTerms);
    }
 
    const handleDeleteTag = items => {
       setSearchTerms(items);
    }


    return ( 
        <React.Fragment>
            <Header
                onAddNewSearchTerm={handleAdd}
                searchTerms={searchTerms}
                onClearSearchTerms={handleClear}
                onDeleteSearchTerm={handleDeleteTag}
             />
            <Jobs/>
        </React.Fragment>
     );
}
 
export default App;