import React from 'react';
import {
  createBrowserRouter, Outlet,
  RouterProvider,
} from "react-router-dom";
import Style from "./styles.scss"
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import MyProfile from "./pages/MyProfile.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

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
        path:"/single-post/:id",
        element: <SinglePost />
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

function App() {
  return (
      <div className="app">
        <div className="container">
          <RouterProvider router={router}/>
        </div>
      </div>
  );
}

export default App;
