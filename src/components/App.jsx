import React, {useState} from "react";
// import FilterTag from "./FilterTag";
import Header from "./Header";
import Jobs from "./Jobs";



const App = () => {

    const [searchTerms, setSearchTerms] = useState([]);
 
    const handleClearSearchItems = () => {
       setSearchTerms([]);
    }
 
    const handleAddNewSearchItem = (idGenerator, newVal) => {
       setSearchTerms(prevValue => [...prevValue, {id: idGenerator(), value: newVal}]);
       console.log(searchTerms);
    }
 
    const handleDeleteSearchItem = items => {
       setSearchTerms(items);
    }


    return ( 
        <React.Fragment>
            <Header
                onAddNewSearchTerm={handleAddNewSearchItem}
                searchTerms={searchTerms}
                onClearSearchTerms={handleClearSearchItems}
                onDeleteSearchTerm={handleDeleteSearchItem}
             />
            <Jobs
                searchTerms={searchTerms}
            />
        </React.Fragment>
     );
}
 
export default App;