import React from 'react';
import './App.css';
import RegistrationForm from './components';
import CustomizedDialogs from './components/dialog';

function App() {
  return (
    <div className="App">
      <CustomizedDialogs title="Sign Up Form">
      <RegistrationForm />
        </CustomizedDialogs>
      
    </div>
  ); 
}

export default App;
