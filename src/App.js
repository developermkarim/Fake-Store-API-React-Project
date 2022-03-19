import { useState } from 'react';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, SetCart] = useState(0);
  const addToCart = () =>{SetCart(cart + 1)}
  return (
    <div className="App">
        <Menubar Counter = {cart}></Menubar>
        <AllProducts sentProps = {addToCart}></AllProducts>
    </div>
  );
}

export default App;
