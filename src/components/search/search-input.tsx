import React, { useState } from "react";

// TO DO: add styling for form

export const SearchInput = () => {
    const [searchText, setSearchText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchText(e.target.value)
        console.log(searchText)
    };

    const getSearchResults = (e:React.SyntheticEvent): void => {
        // make API call 
        e.preventDefault();
        console.log({ searchText })
    }

    return (
        <form>
            <label>Search Keywords</label>
            <input onChange={(e) => {handleChange(e)}} />
            <button onClick={(e) => {getSearchResults(e)}}>Search</button>
        </form>
    )
};

