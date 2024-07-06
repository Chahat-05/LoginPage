import React,{useState} from "react";
import Input from "./Input";
import {Link} from "react-router-dom";
import "./signU.css";
import apiService from "./mock/apiService";


function SignUp() {

  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirm]=useState("");

  const handleSignUp = async (e)=>
  {
   e.preventDefault();
   if(password!== confirmPassword)
   {
    console.log("Passwords don't match");
    setUsername("");
    setPassword("");
    setConfirm("");
    return;
    
   }

   try{
    const newUser= await apiService.addUser({username,password});
    console.log("User signed up successfully:",newUser);
    setUsername("");
    setPassword("");
    setConfirm("");
  }catch(error){
    console.error("Error registering user:",error);
  }

   };
  

  
  
  return (
    <div className="form">
      <form onSubmit={handleSignUp}>
        <img
          className="round-img"
          src="https://pics.craiyon.com/2023-07-06/d5ce09225dc14ac8898e653c298bffe8.webp"
          alt="img"
        />
        <h2> User SignUp</h2>
        <div className="inner-c">
          <Input label="Username" type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
          <Input label="Password" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <Input
            label="Confirm Password"
            type= "password"
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e)=>setConfirm(e.target.value)}
          />
        </div>
        {/* <Input className="form-control" label="Username" type="text" placeholder="Username" /> */}

        {/* <p className="forgt-password">
          <a href="#">Forgot password? </a>
        </p> */}

        <div className="gridc">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
        <p className="signUp">
          Already have an account <Link to="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
