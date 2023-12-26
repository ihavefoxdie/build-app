import React, { useContext } from 'react';
import {
  createBrowserRouter, Outlet,
  RouterProvider,
} from "react-router-dom";
import Style from "./styles.scss"
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import MyProfile from "./pages/MyProfile.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { AuthContext } from './context/authContext';

const Layout = () => {
  return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/my-profile",
        element: <MyProfile/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
]);

const App = () =>
{
  const {currentUser} = useContext(AuthContext);
  if(router.state.location.pathname === '/my-profile' && currentUser === null)
  {
    router.state.location.pathname = '/';
  }
  return (
      <div className="app">
        <div className="container">
          <RouterProvider router={router}/>
        </div>
      </div>
  );
}

export default App;
