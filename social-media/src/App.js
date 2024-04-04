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
import { useContext } from "react";
import { DarkmodeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkmodeContext);


  const ProtectedRoute = ({children})=>{
    if (currentUser === null){
      return <Navigate to="/login" />
    }
    return children;
  }

  const Layout = ()=>{
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
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
