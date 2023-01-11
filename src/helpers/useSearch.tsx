import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../components/App";

type SearchResult = {
  query: string;
  setQuery: Function;
};

export const useSearch = (): SearchResult => {
  const [query, setQuery] = useState('');
  const { updateSearchResults, updateSearchText } = useContext(SearchContext)


  useEffect(() => {
    if (query !== "") {
        const getSearchResults = async () => {
          try {
            const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);
            const response = await res.json();
            console.log({response})
            updateSearchText(query);
            updateSearchResults(response.data)
          } catch (err) {
            console.error(err);
          }
        };

        getSearchResults();
    }
  }, [query]);

  return {
    query,
    setQuery
  };
};