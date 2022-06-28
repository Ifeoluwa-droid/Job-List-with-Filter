import React, {Fragment} from 'react';
import FilterTag from "./FilterTag";
import {useState, useRef} from 'react';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import IconButton from '@mui/material/IconButton';


const JobFilter = props => {

   const [filter, setFilter] = useState(false);
   const [clear, setClear] = useState(false);
   const inputRef = useRef(null);

   const handleFilter = () => {
      setFilter(!filter);
   }

   const handleClear = () => {
      setClear(true);
      props.onClearFilter([]);
   }

   const uuid = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
         const d = Math.floor(Math.random() / 16);
         var r = (d + Math.random() * 16) % 16;
         return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
      });
   }

   const handleAdd = () => {
      setClear(false);
      const newValue = inputRef.current.value;
      props.onAddNewSearchTerm(uuid, newValue);
      inputRef.current.value = '';
   }

   const handleDeleteTag = id => {
      const newSearchTerms = props.searchTerms.filter(item => {
         return item.id !== id;
      });

      props.onDeleteSearchTerm(newSearchTerms);
   }


    return ( 
        <div className="job-filter">
         {filter && <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
            <IconButton onClick={handleAdd}>
               <AddRoundedIcon />
            </IconButton>
            <input className="filter-input" type="text" ref={inputRef} /> 
         </div>}
         <div style={{display: 'flex', justifyContent: 'space-between'}}>
           <div style={{display: 'flex', gap: '1rem'}}>
               {!clear && <Fragment>
                  {
                     props.searchTerms.map(term =>
                        <FilterTag
                           key={term.id}
                           id={term.id}
                           name={term.value}
                           onDeleteTag={() => {handleDeleteTag(term.id)}}
                         />
                     )
                  }
               </Fragment>}
           </div>
           <div style={{display: 'flex', gap: '2rem'}}>
               <IconButton aria-label='filter' onClick={handleFilter}>
                     {filter ? <CloseRoundedIcon /> : <FilterListRoundedIcon />}
               </IconButton>
               <button className='clear-button' onClick={handleClear}>Clear</button>
           </div>
         </div>
        </div>
     );
}
 
export default JobFilter;