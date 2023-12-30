import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate=useNavigate();
    const fn = () =>
    {
        navigate("/Signin")
    }
  return (
    <div>
      <h2>Sign Up</h2>
      <form action="/action_page.php">
        <div className="flex flex-col">
          <div>
            {" "}
            <label for="fname">Name</label>
            <input type="text" id="fname" name="fname" value="Name" />
          </div>
          <div>
            {" "}
            <label for="lname">Email</label>
            <input type="text" id="lname" name="lname" value="Email" />
          </div>
          <div>
            <label for="lname">Password</label>
            <input type="password" id="lname" name="lname" value="Password" />
          </div>
        </div>
      </form>

      <button>Sign Up</button>
      <button onClick={() => fn()}>Login</button>
    </div>
  );
}

export default Signup;
