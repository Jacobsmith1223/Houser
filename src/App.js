import React, {Component} from 'react';
import Header from './components/Header/Header'
import Main from './Routes'


import 'reset-css'



class App extends Component {
  render(){
  return (
    
    <div className="App">
     
     <Header />
     <Main />
    </div>
    
  );
}
}

export default App;
