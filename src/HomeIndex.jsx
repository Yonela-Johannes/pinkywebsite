import React, {useState, useEffect} from 'react';
import Navbar from './Components/NavBar/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './Components/Auth/SignUp';
import ShoppingCart from './pages/ShoppingCart';
import Admin from './Administration/pages/Admin';
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import Feeds from './pages/Feeds';
import Home from './pages/Home';
import Product from './Components/Product';
import Footer from './Components/Footer/Footer';
import Signin  from './pages/Signin';
import './app.css'
import { db } from "./firebase";
import Blog from './pages/Blog';
import BlogPost from './Components/BlogCard/BlogPost';
import "./styles/global.css"
import { userAccesToken } from './utils/fetchUserDetails'
import { fetchUser } from './utils/fetchUserDetails'
import DeliveryScreen from './screens/DeliveryScreen';
import PostPage from './Components/Post/PostPage';

const HomeIndex = () => {

  const emptyItem = []
  localStorage.setItem('emptyItem', JSON.stringify(emptyItem))
  const [products, setProducts ] = useState([])
  const [blogs, setBlogs] = useState([]) 
  const [cartItems, setCartItems] = useState([]);
  const admin = false;
  const [user, setUser] = useState([])
  // let user = false

  const onAdd = (id) => {
    const exist = cartItems.find(x => x.id === id)
    if(exist){
      setCartItems(cartItems.map((x) => 
        x.id === id ? {...exist, quantity: exist.quantity + 1} : x
      ));
    } 
    else {
      setCartItems([...cartItems, {...id, quantity: 1}])
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const onRemove = (id) => {
    const exist = cartItems.find((x) => x.id === id);
    if(exist.quantity === 1){
      setCartItems(cartItems.filter((x) => x.id !== id));
    }else {
      setCartItems(cartItems.map((x) => 
      x.id === id ? {...exist, quantity: exist.quantity - 1} : x
    ));  
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "products"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setProducts(snapshot.docs);
        }
      ),
    [db]
  );
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "blog"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setBlogs(snapshot.docs);
        }
      ),
    [db]
  );
  useEffect(() => {
    const [userInfo] = fetchUser()
    setUser(userInfo)
  }, [])

  return (
    <div className="App">
            {admin ? (
                  <div className='main-app'>
                  <Navbar countCartItems={cartItems.length} user={user} admin={admin}/>
                <main>
                  <Routes>
                  <Route path='/' element={
                    <div className='main'>
                      <h2 className='head'>Products</h2>
                      <div className="container">                   
                            {products.map((product) => {
                              return(
                                    <div key={product.id} id={product.id} className='products'> 
                                      <Home key={product.id} id={product.id} product={product.data()} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
                                    </div>
                              )
                            })
                          }
                      </div>
                    </div>
                    } />
                    <Route path='/cart' element={<ShoppingCart products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
                    <Route path='/feeds' element={user ? <Feeds user={user} admin={admin} /> : <Signin />} />
                    <Route path='/Admin' element={<Admin />} />
                    <Route path='/blog' element={<Blog user={user} admin={admin}  />} />
                    <Route path='/post/:id' element={<BlogPost blogs={blogs.map((blog) => blog)} user={user} admin={admin}  />} />
                    <Route path='/signin' element={user ? <Navigate to="/" /> : <Signin />} />
                  </Routes>
                </main>
                <Footer />
            </div>
              ) : (
                <div className='main-app'>
                <Navbar countCartItems={cartItems.length} user={user}/>
              <main>
                  <Routes>
                  <Route path='/' element={
                    <div className='main'>
                      <h2 className='head'>Products</h2>
                      <div className="container">                   
                            {products.map((product) => {
                              return(
                                    <div key={product.id} id={product.id} className='products'> 
                                      <Home key={product.id} id={product.id} product={product.data()} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
                                    </div>
                              )
                            })
                          }
                      </div>
                    </div>
                    } />
                    <Route path='/cart' element={<ShoppingCart key={products.id} id={products.id} products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
                    <Route path='/feeds' element={user ? <Feeds user={user} admin={admin}  /> : <Signin />} />
                    <Route path='/Admin' element={<Admin />} />
                    <Route path='/blog' element={<Blog user={user} admin={admin}  />} />
                    <Route path='/post/:id' element={<BlogPost blogs={blogs.map((blog) => blog)} user={user} admin={admin}  />} />
                    <Route path='/comments/:id' element={<PostPage user={user} admin={admin}  />} />
                    <Route path='/signin' element={user ? <Navigate to="/" /> : <Signin />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/delivery' element={<DeliveryScreen />} />
                  </Routes>
              </main>
              <Footer />
          </div>
          )}
    </div>   
  );
}

export default HomeIndex;
