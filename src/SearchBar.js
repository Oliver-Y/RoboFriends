import React from 'react';

const SearchBar = (props) =>{
  return(
    <div>
      <label htmlFor="name" className="f6 b db mb2"><span className="normal black-60"></span></label>
      <input id="name" className="input-reset ba b--black-20 pa2 mb2" type="text" onChange = {props.searchChange}>
      </input>
    </div>
  )

}

export default SearchBar;
