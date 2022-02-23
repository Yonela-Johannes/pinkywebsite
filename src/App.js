import React, {useState, useEffect} from 'react';
import Navbar from './Components/NavBar/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './Components/Auth/SignUp';
import ShoppingCart from './pages/ShoppingCart';
import Admin from './Administration/pages/Admin';
import Feeds from './pages/Feeds';
import Home from './pages/Home';
import Footer from './Components/Footer/Footer';
import Signin  from './pages/Signin';
import './app.css'
import Blog from './pages/Blog';
import Post from './Components/BlogCard/Post';
import { client } from './client';
import { userQuery } from './utils/data';
import { productsQuery } from './utils/data';

function App() {
  // const { products } = data;
  const [products, setProducts ] = useState([])
  const [cartItems, setCartItems] = useState([]);
  // const query = userrQuery(userInfo?.googleId);
  const userInfo =  localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  const [ user, setUser ] = useState(null)
  const admin = false
  const onAdd = (product) => {
    const exist = cartItems.find(x => x._id === product._id)
    if(exist){
      setCartItems(cartItems.map((x) => 
        x._id === product._id ? {...exist, quantity: exist.quantity + 1} : x
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if(exist.quantity === 1){
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    }else {
      setCartItems(cartItems.map((x) => 
      x._id === product._id ? {...exist, quantity: exist.quantity - 1} : x
    ));  
    }
  }

  // Fetch user from database
  // Fetch products from database

  useEffect(() => {
    client.fetch(productsQuery)
    .then((data) => {
      setProducts(data)
    })
    const query = userQuery(userInfo?.googleId);
    client.fetch(query)
    .then((data) => {
      setUser(data[0])
    })
  },[userInfo]);

  return (
    <div className="App">
          {admin ? (
                <div className='main-app'>
                <Navbar countCartItems={cartItems.length} user={user} admin={admin}/>
              <main>
                <Routes>
                  <Route path='/' element={<Home products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
                  <Route path='/cart' element={<ShoppingCart products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
                  <Route path='/feeds' element={user ? <Feeds user={user} admin={admin} /> : <Signin />} />
                  <Route path='/Admin' element={<Admin />} />
                  <Route path='/blog' element={<Blog user={user} admin={admin}  />} />
                  <Route path='/signin' element={user ? <Navigate to="/" /> : <Signin />} />
                  {/* Post routing */}
                  <Route path='/post/:slug' element={user ? <Post /> : <Signin />} />
                </Routes>
              </main>
              <Footer />
          </div>
            ) : (
              <div className='main-app'>
              <Navbar countCartItems={cartItems.length} user={user}/>
            <main>
              <Routes>
                <Route path='/' element={<Home products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
                <Route path='/cart' element={<ShoppingCart products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
                <Route path='/feeds' element={user ? <Feeds user={user} admin={admin}  /> : <Signin />} />
                <Route path='/Admin' element={<Admin />} />
                <Route path='/blog' element={<Blog user={user} admin={admin}  />} />
                <Route path='/signin' element={user ? <Navigate to="/" /> : <Signin />} />
                <Route path='/signup' element={<SignUp />} />
                {/* Post routing */}
                <Route path='/post/:id' element={user ? <Post /> : <Signin />} />
              </Routes>
            </main>
            <Footer />
        </div>
        )}
    </div>
  );
}

export default App;
