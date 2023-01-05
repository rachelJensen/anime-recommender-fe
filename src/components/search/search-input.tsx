import React, { useState } from "react";
import { useSearch } from "../../helpers/useSearch";

// TO DO: add styling for form

export const SearchInput = () => {
    const [searchText, setSearchText] = useState('')
    const { searchData, setSearchData } = useSearch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchText(e.target.value)
    };

    return (
        <form>
            <label>Search Keywords</label>
            <input 
              type="text"
              placeholder="Search for..."
              value={searchText}
              onChange={(e) => {handleChange(e)}} 
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setSearchData({...searchData, searchText: searchText});
                setSearchText('');
              }}>
                Search
            </button>
        </form>
    )
};