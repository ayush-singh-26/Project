import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Github, { githubInfoLoader } from './components/github';

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <App/>,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:"/about",
//           element:<About/>
//         },
//         {
//           path:"/contact",
//           element:<Contact/>
//         }
//       ]
//     }
//   ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

