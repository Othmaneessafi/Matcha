import React from 'react';
import Routes from './Routes/Routes';
import Alert from './components/shared/Alert'
import './App.css'

function App() {
  return (
    <div className="App">
      <Alert />
      <Routes />
    </div>
  );
}
export default App;