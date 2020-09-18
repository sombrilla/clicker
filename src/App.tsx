import React from 'react';
import {Button} from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => console.log('test')}>
          Test
        </Button>
      </header>
    </div>
  );
}

export default App;
