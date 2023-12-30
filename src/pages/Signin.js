import React from 'react'
import { useNavigate } from "react-router-dom";

function Signin() {

    const navigate=useNavigate();
    const fn = () =>
    {
        navigate("/Signup")
    }
  return (
    <div>
    <h2>Sign In</h2>
    <form action="/action_page.php">
      <div className="flex flex-col">
        <div>
          {" "}
          <label for="fname">Name</label>
          <input type="text" id="fname" name="fname" value="Name" />
        </div>
      
        <div>
          <label for="lname">Password</label>
          <input type="password" id="lname" name="lname" value="Password" />
        </div>
        <h4>Lost password? Click here</h4>
      </div>
    </form>

    <button onClick={() => fn()}>Sign Up</button>
    <button>Login</button>
  </div>
  )
}

export default Signin