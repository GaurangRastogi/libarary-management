import React from 'react';
import './SearchBar.css';
import Search from './search.png';

const SearchBar = () => {
  return (
    <div className='sb'>
        <img src={Search} width={50} height={50}/>
        <input type="search" placeholder="Search" className="searchBar"/>
    </div>
  )
}

export default SearchBar