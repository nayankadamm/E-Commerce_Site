import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import Test from './components/Test';
import ProductScreen from './screens/ProductScreen';
import { Provider } from 'react-redux';
import store from './store';
import CartScreen from './screens/cartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
const router = createBrowserRouter
(
  createRoutesFromElements
  (
    <Route path="/" element={<App />} >
    <Route index={true} path="/" element={<HomeScreen />} />
    <Route  path='/product/:id' element={<ProductScreen />} />
    <Route  path='/cart' element={<CartScreen />} />
    <Route  path='/login' element={<LoginScreen />} />
    <Route  path='/register' element={<RegisterScreen />} />
    
    <Route path='' element={<PrivateRoute/>}>
    <Route  path='/shipping' element={<ShippingScreen />} />
    <Route  path='/payment' element={<PaymentScreen />} />
    </Route>
    </Route>
    
    
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <RouterProvider router={router}/>
    </Provider>
   
  </React.StrictMode>
);


