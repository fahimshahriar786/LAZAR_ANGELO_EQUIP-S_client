import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';

import Checkout from './Pages/Checkout/Checkout/Checkout';
import AddItem from './Pages/Home/Add Item/AddItem';
import Home from './Pages/Home/Home/Home';
import Manage from './Pages/Home/manage/Manage';
import MyItems from './Pages/Home/My Item/MyItems';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Inventory from './Pages/ServiceDetail/Inventory';

import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route> 
        <Route path='/manage' element={<Manage></Manage>}></Route> 
        <Route path='/addItem' element={<AddItem></AddItem>}></Route> 
        <Route path='/myItem' element={<MyItems></MyItems>}></Route> 
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
