import React, { useState , useEffect} from 'react';
import { Route , Routes } from 'react-router-dom';
import {Home , Men ,Women ,Accessories,Collection} from './pages';
import './App.css';
import Header from './components/header/Header';
import { Footer } from './containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/user/Signin';
import Register from './components/user/Register';
import Profile from './components/user/Profile';


function App() {
  const[products,setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`http://127.0.0.1:8000/products/`);
      setProducts(await res.json());
    };

    getProducts();
  }, []);
  console.log(products);

  return (
    <div className="App" style={{width:'100%'}}>
      <Header />

       <Routes>

          <Route exact path="/"  element={<Home products={products}/>}/>
          <Route path="/men"  element={<Men products={products}/>}/>
          <Route path="/profile"  element={<Profile/>}/> 
          <Route path="/signin"  element={<Signin/>}/> 
          <Route path="/register"  element={<Register/>}/> 
          <Route path="/women"  element={<Women products={products}/>}/>   
          <Route path="/accessories"  element={<Accessories products={products}/>}/> 
          <Route path="/collections"  element={<Collection products={products}/>}/> 
          <Route path="/:piece"  element={<Collection products={products}/>}/> 
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
