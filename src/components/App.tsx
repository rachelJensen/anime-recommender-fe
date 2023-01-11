import { useEffect, useState, createContext } from 'react';
import { Header } from './header/header';
import { DesktopSearchPage } from './search-page/desktop-search-page';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MobileSearchPage } from './search-page/mobile-search-page';
import { AnimeDetails } from '../types/anime-search-types';

type SearchResults = {
  animes: Array<AnimeDetails> | null,
  updateSearchResults: Function,
  searchText: string, 
  updateSearchText: Function
};

export const SearchContext = createContext({} as SearchResults);

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [animes, setAnimes] = useState([] as Array<AnimeDetails>);
  const [searchText, setSearchText] = useState("")
  console.log({animes})
  console.log({searchText})
  
  const updateSearchResults = (newResults: Array<AnimeDetails>):void => {
    setAnimes(newResults)
  }

  const updateSearchText = (searchTerm: string) => {
    setSearchText(searchTerm);
  }

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/recommendations/anime')
      .then(res => res.json())
      .then(data => updateSearchResults(data.data))
  }, [])

  return (
    <div className="App">
      <SearchContext.Provider 
        value={{
          animes, 
          updateSearchResults, 
          searchText, 
          updateSearchText
        }}>
        <Header />

        {isMobile ? <MobileSearchPage /> : <DesktopSearchPage />}
      </SearchContext.Provider>  
    </div>
  );
}

export default App;
