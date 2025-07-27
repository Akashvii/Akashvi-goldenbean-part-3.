import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './src/about';
import Menu from './src/menu';
import Order from './src/order';
import OrderList from './src/OrderList';
import Users from './user/Users.jsx';
import Signup from './user/Signup.jsx';
import Signin from './lib/Signin.jsx';
import Signout from './lib/Signout.jsx';
import PrivateRoute from './lib/PrivateRoute.jsx';
import MyProfile from './components/MyProfile.jsx'; // Import MyProfile

const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/OrderList" element={<OrderList />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Route>

         <Route path="/myprofile" element={<MyProfile />} />

        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
