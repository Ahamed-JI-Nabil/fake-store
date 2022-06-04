import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Sheared/Menubar/menubar';
import Test from './Components/Sheared/test/test';
import AllProducts from './Components/Sheared/AllProducts/AllProducts';
import { useState } from 'react';



function App() {

  const [count, setCount] = useState(0)

  const setCartCount = ()=>{
    setCount(count+1)
  }

  // const count = ()=>{
  //   console.log('Bro I got it!')
  // }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
