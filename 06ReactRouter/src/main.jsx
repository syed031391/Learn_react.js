import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from './component/Home/Home.jsx'
import AboutUs  from './component/AboutUs/AboutUS.jsx'
import ContactUs from './component/ContactUs/ContactUs.jsx';
import Github from './component/Github/Github.jsx'
import {githubInfoLoader} from './component/Github/Github.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     <Route index element={<Home/>} />
     <Route path='about' element={<AboutUs/>} />
     <Route path='contact' element={<ContactUs/>} />
     <Route
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}
       />
    </Route>
  ));
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
