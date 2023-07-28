import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import './app.css'
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import {signOut} from 'firebase/auth'
import { auth } from "./Firebase-config";
function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));

  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname="/login"
    })
  }
  return (
    <Router>
      <nav>
          <Link to="/">Home</Link>
          {!isAuth ? <Link to="/login">Login</Link> : 
          <>
          <Link to="/createPost">Create Post</Link>
          <a href="Logout" onClick={signUserOut}>Log Out</a>
          </>
          }
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/createPost" element={<CreatePost isAuth={isAuth}/>}/>
      </Routes>
      <footer>Made by Siddhesh Ganesh Chavan</footer>
    </Router>
    
  );
}

export default App;
