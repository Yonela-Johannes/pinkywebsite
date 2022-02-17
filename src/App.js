import React, {useState} from 'react';
import Navbar from './Components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/Auth/SignUp';
import ShoppingCart from './pages/ShoppingCart';
import Feedback from './pages/Feedback';
import Feeds from './pages/Feeds';
import Admin from './pages/Admin';
import Home from './pages/Home';
import data from './pages/data';
import Footer from './Components/Footer/Footer';
import Signin  from './pages/Signin';
import './app.css'

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]); 

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist){
      setCartItems(cartItems.map((x) => 
        x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.quantity === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }else {
      setCartItems(cartItems.map((x) => 
      x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x
    ));  
    }
  }

  return (
    <div className="App">
      <div className='main-app'>
        <Navbar countCartItems={cartItems.length}/>
          <main>
            <Routes>
              <Route path='/' element={<Home products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
              <Route path='/cart' element={<ShoppingCart products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
              <Route path='/feeds' element={<Feeds />} />
              <Route path='/testimonials' element={<Feedback />} />
              <Route path='/Admin' element={<Admin />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
