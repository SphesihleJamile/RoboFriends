import React from "react";
import "tachyons"

const SearchBox = ({searchfield, onSearchChange}) => {
    return(
        <div className="pa2">
            <input 
                className="pa3 b--green bg-lightest-blue"
                type='search'
                placeholder="search robots"
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBox;