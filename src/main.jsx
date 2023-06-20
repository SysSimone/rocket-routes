import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//conf router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

//components
import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import ContactDetails from './routes/ContactDetails.jsx';


//passando argumento de array com rotas configuradas, ele leva objetos que serão nossas páginas, definidas por propriedades
//a primeira é a path, (path: "/") que o caminho até essa página, o elemento que é o componente principal da pagina, 
//nesse caso é o Home


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    // 3- pagina de erro
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 5- nested routes - identificador unico 
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },

      // navigate para paginas inexistentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
