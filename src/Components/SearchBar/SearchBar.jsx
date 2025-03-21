import React from 'react'
import './Searchbar.css'
import { useState } from "react";
import { products } from '../../../Utils/products';




const SearchBar = ({ setFilterList }) => {

  const [searchWord, setSearchWord] = useState(null); 
  // const debounceSearchWord = useDebounce(searchWord, 300);
  const handelChange = (input) => {
    
    setSearchWord(input.target.value);
    setFilterList(
      products.filter((item) =>
        item.productName?.toLowerCase().includes(searchWord?.toLowerCase())
      )
    );
  };
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange={handelChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    
          </div>
  );
}

export default SearchBar
