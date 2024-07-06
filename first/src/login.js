import React,{useState} from "react";
// import {useNavigate} from "react-router-dom";
import Input from "./Input";
import {Link} from 'react-router-dom';
import "./login.css";
import apiService from "./mock/apiService";

function Login() {

  const[username, setUsername]=useState("");
  const[password,setPassword]=useState("");
  // const navigate=useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const users = await apiService.getUsers();
      const user = users.find(u => u.username === username && u.password === password);
      
      if (user) {
        console.log("Logged in successfully");
        // Redirect or handle successful login
      } else {
        console.log("Invalid username or password");
      }
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  
  return (
    <div className="form">
      <form onSubmit={handleLogin}>
        <img
          className="round-img"
          src="https://pics.craiyon.com/2023-07-06/d5ce09225dc14ac8898e653c298bffe8.webp"
          alt="img"
        />
        <h2> User Login</h2>
        <div className="inner-c">
          <Input label="Username" type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <Input label="Password" type="password" placeholder="Password" value={password} onChange={ (e)=>setPassword(e.target.value)}/>
        </div>
        {/* <Input className="form-control" label="Username" type="text" placeholder="Username" /> */}

        <p className="forgt-password">
          <a href="#">Forgot password? </a>
        </p>

        <div className="gridc">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
        <p className="signUp">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
