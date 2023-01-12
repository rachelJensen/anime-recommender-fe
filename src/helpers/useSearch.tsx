import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../components/App";
import queryGenerator from "./query-generator";

type SearchResult = {
  query: string;
  setQuery: Function;
};

export const useSearch = (): SearchResult => {
  const [query, setQuery] = useState('');
  const { updateSearchResults, updateSearchText, selectedGenres } = useContext(SearchContext);

  //TO DO: use queryGenerator function as helper function to generate API endpoint
  useEffect(() => {
    const endpoint = queryGenerator(query, selectedGenres);

    const getSearchResults = async () => {
            try {
              const res = await fetch(endpoint);
              const response = await res.json();
              console.log({response})
              updateSearchText(query);
              updateSearchResults(response.data)
            } catch (err) {
              console.error(err);
            }
          };
  
    getSearchResults();

  }, [query, selectedGenres]);

  return {
    query,
    setQuery,
  };
};