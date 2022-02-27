import React, {useState, useEffect} from 'react';
import Navbar from './Components/NavBar/Navbar'
// import { getProviders, getSession, SessionProvider, useSession } from "next-auth/react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './Components/Auth/SignUp';
import ShoppingCart from './pages/ShoppingCart';
import Admin from './Administration/pages/Admin';
import Feeds from './pages/Feeds';
import Home from './pages/Home';
import Product from './Components/Product';
import Footer from './Components/Footer/Footer';
import Signin  from './pages/Signin';
import './app.css'
import Blog from './pages/Blog';
import Post from './Components/BlogCard/Post';
import "./styles/global.css"

const HomeIndex = () => {

  const emptyItem = []
  localStorage.setItem('emptyItem', JSON.stringify(emptyItem))
  const [products, setProducts ] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const admin = true;
  const user = [{
    userName: "Yonela Johannes"
  }]
  const message = 'Be Pleasured By Pinky'
  
  const onAdd = (product) => {
    const exist = cartItems.find(x => x._id === product._id)
    if(exist){
      setCartItems(cartItems.map((x) => 
        x._id === product._id ? {...exist, quantity: exist.quantity + 1} : x
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }


  // const homePageLoader = () => {
  //        <div className="loadingSpinner">
  //       <div className='loadingSpinnerWrapper'>
  //         <img src={homeLogo} className='homeLogo' alt='logo' />
  //         <Spinner message={message} />
  //       </div>
  //     </div> 
  // }

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
                  <Route path='/:_id' element={user ? <Post /> : <Signin />} />
                  <Route path='products/<slug/>' element={user ? <Product products={products} /> : <Signin />} />
                </Routes>
              </main>
              <Footer />
          </div>
          )}
    </div>   
  );
}

export default HomeIndex;

// export async function getServerSideProps (context){
//   const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
//     (res) => res.json()
//   );
//   const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
//     (res) => res.json()
//   );
//   const providers = await getProviders();
//   const session = await getSession(context);

//   return {
//     props: {
//       trendingResults,
//       followResults,
//       providers,
//       session,
//     },
//   };
// }