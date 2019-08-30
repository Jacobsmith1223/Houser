import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header'
import Wizard from './components/Wizard/Wizard'

import 'reset-css'



function App() {
  return (
    <div className="App">
     <Dashboard />
     <Header />
     <Wizard />
    </div>
  );
}

export default App;
