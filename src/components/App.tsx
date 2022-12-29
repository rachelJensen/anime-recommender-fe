import React from 'react';
import { Header } from './header/header';
import { DesktopSearchPage } from './search-page/desktop-search-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <DesktopSearchPage />
      </header>
    </div>
  );
}

export default App;
