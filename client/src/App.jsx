import {
  createBrowserRouter, Outlet,
  RouterProvider,
} from "react-router-dom";
import Style from "./styles.scss"
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import NewPost from "./pages/NewPost.jsx";
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
        path:"/new-post",
        element: <NewPost />
      },
      {
        path:"/single-post/:id",
        element: <SinglePost />
      }
    ]
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: "/single-post",
    element: <SinglePost/>,
  },
  {
    path: "/new-post",
    element: <NewPost/>,
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
