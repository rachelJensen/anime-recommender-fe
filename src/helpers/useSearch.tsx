import { useState, useEffect } from "react";

type SearchResult = {
  searchData: {
    searchText: string;
    results: Array<any>;
  };
  setSearchData: Function;
};

export const useSearch = (): SearchResult => {
  const [searchData, setSearchData] = useState({
    searchText: '',
    results: []
  });


  useEffect(() => {
    if (searchData.searchText !== "") {
        const getSearchResults = async () => {
          try {
            const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchData.searchText}&sfw`);
            const response = await res.json();
            console.log({response})
            setSearchData({ ...searchData, results: response.data });
          } catch (err) {
            console.error(err);
          }
        };

        getSearchResults();
    }
  }, [searchData.searchText]);

  return {
    searchData,
    setSearchData
  };
};