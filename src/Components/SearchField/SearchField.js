import { useState } from "react";

const SearchField = ({
  onSearch = (event)=>{}
}) => {
  return ( 
    <div className="flex">
      <form onSubmit={onSearch}>
        <input type="text" name='searchtext' />
        <button type="submit">
          search
        </button>
      </form>
    </div> 
  );
}
 
export default SearchField;