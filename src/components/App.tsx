import React from 'react';
import { Header } from './header/header';
import { DesktopSearchPage } from './search-page/desktop-search-page';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MobileSearchPage } from './search-page/mobile-search-page';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {isMobile ? <MobileSearchPage /> : <DesktopSearchPage />}
      </header>
    </div>
  );
}

export default App;
