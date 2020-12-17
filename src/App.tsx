import React from 'react';
import { AppCopiesProvider, AppCopies } from './context/appCopiesContext';
import { GameInterface } from './components/GameInterface/GameInterface';
import { Game } from './components/Game/Game';


const defaultCopies: AppCopies = {
  stats: {
    level: 'Level:',
    perClick: 'DPC:',
    perSecond: 'DPS:',
    army: 'Army count:'
  }
}

export const App = () => {

  return (
    <div className="App">
      <AppCopiesProvider data={defaultCopies}>
        <GameInterface />
        <Game />
      </AppCopiesProvider>
    </div>
  );
}
