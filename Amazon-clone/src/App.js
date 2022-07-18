import './App.css';
import React from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Card from './components/Card';
import Hero from './components/Hero';

function App() {
  const[inputState,setInputState] = React.useState('')
  console.log(inputState)
 

return(
  <>
  <Header setInputState={setInputState}/>
  <SubHeader/>
  <Hero />
  <Card inputState={inputState} />
  </>
    
)
}

export default App;
