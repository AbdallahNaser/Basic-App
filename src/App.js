import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Guest from './components/guest';
import List from './components/List';
import ProductsList from './components/ProductsList';
function App() {

  const [isLoggedIn, setIsLoggedIn]=useState(false);

  let element;
  if(isLoggedIn)
  {
    element=<Welcome name="abdallah"/>
  }
  else{
    element=<Guest name="ahmed"/>
  }



  return (
    <>
   

    <ProductsList/>
    </>
  );
}

export default App;
