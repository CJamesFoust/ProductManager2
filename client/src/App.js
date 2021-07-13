import { Router } from '@reach/router';
import React from 'react';
import Detail from './views/Detail';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
      </Router>
    </div>
  );
}

export default App;
