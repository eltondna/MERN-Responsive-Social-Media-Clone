import Login from "./login/login";
import "./styles.scss"
import Register from "./register/register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Home from "./home/home";
import Profile from "./profile/Profile";

function App() {
  const currentUser = true;

  const ProtectedRoute = ({children})=>{
    if (currentUser === false){
      return <Navigate to="/login" />
    }

    return children;
  }

  const Layout = ()=>{
    return (
      <div className="theme-dark">
        <Navbar/>
        <div style={{display: "flex"}}>
        <Leftbar/>
        <div style={{flex: 6}}>
          <Outlet/>
        </div>
        <Rightbar/>
        </div>
      </div>
    )

  }


  const router = createBrowserRouter([
    {
      path:"/",
      element: 
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/profile/:id',
          element: <Profile/>
        },
      ]
    },

    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
}



export default App;
