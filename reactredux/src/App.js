import './App.css';
import React from 'react';
import CompA from '../src/components/CompA';

//export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'Appu'}> */}
        <CompA />
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
