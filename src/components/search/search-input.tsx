import React, { useState } from "react";
import { useSearch } from "../../helpers/useSearch";

// TO DO: add styling for form

export const SearchInput = () => {
    const [searchText, setSearchText] = useState('')
    const { setQuery } = useSearch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchText(e.target.value)
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setQuery(searchText);
        setSearchText('');
    }

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
                handleSubmit(e);
              }}>
                Search
            </button>
        </form>
    )
};