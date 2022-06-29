import React, {Fragment} from 'react';
import FilterTag from "./FilterTag";
import {useState, useRef} from 'react';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FilterInput from './FilterInput';
import IconButton from '@mui/material/IconButton';


const JobFilter = props => {
   const [filter, setFilter] = useState(false);
   const [clear, setClear] = useState(false);
   const desktopInputRef = useRef(null);
   const mobileInputRef = useRef(null);

   const handleFilter = () => {
      setFilter(!filter);
   }

   const handleClear = () => {
      setClear(true);
      props.onClearFilter([]);
   }

   /********** Unique id generator **********/
   const uuid = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
         const d = Math.floor(Math.random() / 16);
         var r = (d + Math.random() * 16) % 16;
         return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
      });
   }

   const handleAdd = () => {
      setClear(false);
      let newValue = desktopInputRef.current.value;
      if (!newValue) {
         newValue = mobileInputRef.current.value;
      }
      props.onAddNewSearchTerm(uuid, newValue);
      desktopInputRef.current.value = '';
      mobileInputRef.current.value = '';
   }

   const handleDeleteTag = id => {
      const newSearchTerms = props.searchTerms.filter(item => {
         return item.id !== id;
      });

      props.onDeleteSearchTerm(newSearchTerms);
   }


    return ( 
        <div className="job-filter">
         {filter && <FilterInput
               ref={desktopInputRef}
               className='unshow-on-mobile'
               onAddFilterItem={handleAdd}
          />}
         <div className='d-flex-row' style={{justifyContent: 'space-between'}}>
           <div className='d-flex-row filter-display' style={{gap: '1rem'}}>
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
           <div className='d-flex-row gap-2'>
               <IconButton aria-label='filter' onClick={handleFilter}>
                     {filter ? <CloseRoundedIcon /> : <FilterListRoundedIcon />}
               </IconButton>
               <button className='clear-button' onClick={handleClear}>Clear</button>
           </div>
         </div>
         {filter && <FilterInput 
            ref={mobileInputRef}
            className="show-on-mobile"
            onAddFilterItem={handleAdd}
         />}
        </div>
     );
}
 
export default JobFilter;